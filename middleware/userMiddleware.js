const valid = (req,res,next) =>{
   let {username, email, number, password} =  req.body;

   if(username && email && password && number)
   {
        return next();
   }
   else{
    res
    .status(400)
    .send("Not a Valid Data.")
   }
}

const isAuth = (req,res,next) =>{
   
   let {logged} = req.cookies;

   if(logged)
   {
      next();
   }else{
      res.redirect("/signup")
   }
}

const newAuth = (req,res,next)=>{
   if(req.user)
   {
      next();
   }
   else{
      res.redirect("/login");
   }
}

module.exports = {valid, isAuth, newAuth}