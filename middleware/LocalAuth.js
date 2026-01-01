const { user } = require("../models/userSchema");

 const LocalStrategy = require("passport-local").Strategy;

const LocalAuth = (passport) =>{
    passport.use(new LocalStrategy( async(username, password, done)=>{
           let result = await user.findOne({username:username});

           if(!result)
           {
                return done(null, false);
           }
           if(result.password != password)
           {
                return done(null, false);
           }

           return done(null, result);
    }))

    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })
    passport.deserializeUser(async (id, done)=>{
        let result = await user.findById(id);
        done(null, result)
    })
}

module.exports = {LocalAuth}