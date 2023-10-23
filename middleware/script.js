import * as http from "http";
import "dotenv/config";
const server = http.createServer((req, res) => {
    let data = "";
    let statusCode = res.statusCode;
    let responseData = "";
    if (req.method === "POST" && req.url === "/api/contact") {
        res.setHeader("Access-Control-Allow-Origin", "http://localhost:5500");
        res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
        res.setHeader("Access-Control-Allow-Methods", "POST");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        try {
            req.on("data", (chunk) => {
                data += chunk;
            });
            req.on("end", () => {
                const requestData = JSON.parse(data);
                console.log(requestData);
                responseData = JSON.stringify({ message: "Message has been received successfuly", data: requestData });
                console.log(responseData);
                statusCode = 200;
                res.end(responseData);
            });
        }
        catch (err) {
            statusCode = 400;
            responseData = JSON.stringify({ error: "Invalid JSON Data" });
            res.end(responseData);
        }
    }
    else {
        statusCode = 418;
        responseData = JSON.stringify({ error: "Not Found" });
        res.end(responseData);
    }
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
