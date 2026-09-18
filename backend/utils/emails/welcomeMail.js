// Import the necessary modules here

import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  // Write your code here

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "storefleet2k26@gmail.com",
      pass: "ffspesetbpfwqqyl",
    },
  });
  const emailOptions = {
    from: "storefleet2k26@gmail.com",
    to: user.email,
    subject:"Welcome to storeFleet!",
    html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="text-align: center;">
    
    <img src="https://files.codingninjas.in/logo1-32230.png" style="width: 300px;height: 250px; margin-top: 100px;"/>

    <h2>Welcome to Storefleet</h2>
    <h4>Hello! ${user.name}</h4>
    <h4>Thank you for registering Storefleet, We're excited to have you as a new member of out community </h4>

    <button style="width: 100;height: 50px; background-color:cornflowerblue; border: 2px 2px solid; border-radius: 5px;">Get Started</button>

</body>
</html>
    `,
  }
  console.log(emailOptions);
  console.log(user.email);
  console.log(user.name);
try{
  const result = await transport.sendMail(emailOptions);
  console.log("email sent successfully");
  console.log(result)
}catch(err){
  console.log("error in sending:"+err)
}
};
