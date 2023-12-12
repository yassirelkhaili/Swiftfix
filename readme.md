![LOGO](https://i.imgur.com/XJfz0p1.png)


# 🚀 Swiftfix

SwiftFix is a reliable and efficient repair and maintenance company dedicated to providing top-notch services for all your repair needs. We specialize in a wide range of services, including appliance repair, plumbing, electrical work, HVAC maintenance, and more. Our team of skilled professionals is committed to delivering prompt, high-quality services to ensure your satisfaction and peace of mind.🔨🔧🧰


## Features

- Responsive design
- Fully function Contact Form
- Reactive design
- Home Page
- Contact Page
- About Page
- Services Page
- Client Side form validation
- Google recaptcha v2
- Accordion
- Burger Menu
- Interactive UI
- Dropdown menu
- Search and button modals
- Testimonials slider

## Screenshots

![Hero Section](https://i.imgur.com/flj5xx6.png)

![Testimonials Section](https://i.imgur.com/K48HEWj.png)

![Contact Section](https://i.imgur.com/OOzuIH8.png)

![FAQ Section](https://i.imgur.com/kWCJpL5.png)

## 👨‍💻 Author:

### Yassir Elkhaili
Full Stack Engineer

## 🛠 Techs and tools

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="40" alt="css3 logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" alt="npm logo"  />
</div>

###


## Jira Tasks

You can check the Jira tasks and workflow here:

[Jira Board ](https://nonesite.atlassian.net/jira/software/projects/SERVICES/boards/1)

Update: Jira tasks seem to have pulled a Houdini and disappeared into the depths of Jira's mysterious realm! 🎩✨ #TaskVanishingAct

## Figma high-fidelity Wireframe:

You can check the Swiftfix Figma Wireframe here:

[Light Mode](https://www.figma.com/file/ssKsF7HDjp2SMAbIQgxX4T/SwiftFix?type=design&node-id=0-1&mode=design&t=tX1Dcv9Jjx5DihNP-0)

## Live Demo

You can check out the live demo here:

[Demo](https://yassirelkhaili.github.io/Swiftfix/)

Note: This version is only for demonstration perposes and is not production-ready nor is it optimized for live-use, and it doesn't include all features like contact form functionality. If you wish to experience the full swiftfix website experience please see the instructions below on how to install this project locally on your machine.

## How to install this project locally

1. clone the repository 

```bash
git clone https://github.com/yassirelkhaili/Swiftfix.git
```
3. cd peoplepertask

```bash
cd swiftfix
```

4. type npm install command in the terminal to install all the project dependencies + npm install (-g optional) typescript to install typescript

```bash
npm install
```
5. when done, type npm start in order to start the compilation process for typescipt then cd middleware then type npm install to install backend dependencies then npm start to start the backend server using nodemon

```bash
npm start
npm install
```
6. create a .env file in ./middleware you have to provide your own credentials for the following required fields (this is necessary for the contact form to function properly)

```bash
RECAPTCHA_SERVER_KEY 'server key generated from google recaptcha v2 developer dashboard'
process.env.SMTP_HOST 'and email address or smtp host depending on smtp service used'
process.env.SMTP_PASS "smtp password (App_key if using google's free smtp service)"
```
OPTIONAL:
```bash
process.env.PORT 'desired backend server port'
```

7. start the dev server using vscode's live server extension

### Maintainer 

- This Readme is being maintained by [Yassir Elkhaili](https://github.com/yassirelkhaili)
- Email: [elkhailiyassir@gmail.com](mailto:elkhailiyassir@gmail.com)





