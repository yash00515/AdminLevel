
let nodemailer = require("nodemailer");

const mailer = () =>{
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"tirthbhalala510@gmail.com",
            pass:"kusrrukntgzm bhay"
        },
    })

    return transporter;
}

module.exports = {mailer};