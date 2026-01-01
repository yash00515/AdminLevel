const { user } = require("../models/userSchema")
let {mailer} = require("../helper/mail");
const { get } = require("mongoose");


const create = async (req,res)=>{

    let data = req.body;
    let result =  await user.create(data);
    res.cookie("logged",result.id).send(result);
    
}

const Home = async(req,res)=>{
    let data = await user.find()
    res.send(data);
}

const update = async (req,res)=>{
    let {id} = req.params;
    let data = req.body; 

    await user.findByIdAndUpdate(id,data)
    res.send("Updated Successfully")
}

const remove = async(req,res) => 
{
    let {id} = req.params;
    await user.findByIdAndDelete(id);
    res.send("Data Deleted Succesfully...")
}

const index = (req,res) =>{
    res
    .render("index")
}

const signup = (req,res) => {
    res.render("signup")
}

const getLogin = (req,res)=>{
    res.render("login")
}


// const login = async(req,res) =>{
//     let {email, password} = req.body;

//     let result = await user.findOne({email:email})

//     if(!result)
//     {
//         return res.send("Invalid Email ID")
//     }
//     if(result.password != password)
//     {
//         return res.send("Wrong Password");
//     }

//     return res.send("Logged In Successfull")
// }


const local = (req,res)=>{
    res.send("Logged in using passport local")
}

const profile = (req,res)=>{
    res.send(req.user)
}

const Logout = (req,res)=>{
    req.logOut((err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
           res.redirect("/login");
        }
    })
}

const reset = (req,res)=>{
    res.render("Reset")
}

let updatePassword = async(req,res)=>{
    let {email, oldpassword, newpassword} = req.body;

   let result = await user.findOne({email:email});

   if(!result)
   {
    return res.send("Invalid Email");
   }
   if(result.password !== oldpassword)
   {
    return res.send("Wrong Password, TRY AGAIN");
   }

   await user.findByIdAndUpdate(result._id,{password:newpassword});
   res.send("Password changed successfully...");
}

let OTP;
let passwordReset = (req,res) =>{
    OTP = Math.round(Math.random()*10000);
    let mail = mailer();

    let mailOptions =
    {
        from:"rwr2.aryan.bs@gmail.com",
        to: req.body.email,
        subject: "Password Reset OTP",
        text:`Reset OTP: ${OTP}`
    }

    mail.sendMail(mailOptions, (err, info)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log(info);
        }
    })

    res.send("OTP Sent successfully, Check your email");
}

const verify = (req,res) =>
{
   let token =  req.body.otp;

   if(token == OTP)
   {
        res.redirect("index");
   }
   else
   {
        res.redirect("forgot");
   }
}

const getForgot = ( req,res)=>{
    res.render("forgot");
}

module.exports = {
        create,
        getForgot
        , Home
        ,update
        ,remove
        ,signup
        ,index,
        local,
        profile,
        Logout,
        reset,
         updatePassword,
         passwordReset,
         verify,
        getLogin,}