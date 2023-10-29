import * as http from "http";
import "dotenv/config";
import { createTransport } from "nodemailer";
import fetch from "node-fetch";
const verifyCaptcha = async (requestData) => {
    try {
        const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${requestData["g-recaptcha-response"]}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data.success;
    }
    catch (error) {
        console.error("Error:", error);
        return false;
    }
};
const sendMail = async (owner, data) => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_HOST,
            pass: process.env.SMTP_PASS,
        },
    });
    try {
        await transporter.sendMail({
            from: process.env.SMTP_HOST,
            to: owner ? process.env.SMTP_HOST : data.email,
            subject: owner ? "Message from Swiftix" : "Thank you for contacting us!",
            text: owner ? data.message : "Message body",
        });
        console.log("Email sent successfully");
    }
    catch (error) {
        console.error("Error sending email:", error);
    }
};
const server = http.createServer((req, res) => {
    let data = "";
    let responseData = "";
    if (req.method === "POST" && req.url === "/api/contact") {
        const origin = req.headers.origin;
        if (origin) {
            res.setHeader("Access-Control-Allow-Origin", origin);
        }
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        try {
            req.on("data", (chunk) => {
                data += chunk;
            });
            req.on("end", async () => {
                const requestData = JSON.parse(data);
                const isCaptchaValid = await verifyCaptcha(requestData);
                if (isCaptchaValid) {
                    sendMail(false, requestData);
                    sendMail(true, requestData);
                    delete requestData["g-recaptcha-response"];
                    responseData = JSON.stringify({
                        error: false,
                        data: requestData,
                    });
                    res.statusCode = 200;
                }
                else {
                    responseData = JSON.stringify({
                        error: true,
                        message: "Please verify the captcha",
                    });
                    res.statusCode = 400;
                }
                res.end(responseData);
            });
        }
        catch (err) {
            res.statusCode = 400;
            responseData = JSON.stringify({
                error: true,
                message: "Invalid JSON Data",
            });
            res.end(responseData);
        }
    }
    else {
        res.statusCode = 404;
        responseData = JSON.stringify({ error: true, message: "Not Found" });
        res.end(responseData);
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
