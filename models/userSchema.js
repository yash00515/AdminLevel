const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username:{
            type:String,
        },
        password:
        {
             type:String,
    
        },
        email:{
             type:String,
        },
        number:{
            type:Number,
        }
    }
)

let user = mongoose.model("user",userSchema );
module.exports = {user};