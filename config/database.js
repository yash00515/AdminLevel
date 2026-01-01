const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/MVC');

const db = mongoose.connection;

db.on('connected', (err)=>{
    if(err)
    {
       console.log("Database is not connected...");
       return false;
        
    }
    console.log("Database is connected successfully")
})

module.exports={db};