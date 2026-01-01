const {Router} = require("express");
const { create, Home, update, remove, index, signup, login, getLogin, local, profile, Logout, reset, updatePassword, passwordReset, verify, getForgot} = require("../controllers/Controller");
const { valid, isAuth, newAuth } = require("../middleware/userMiddleware");
const passport = require("passport");

const route = Router();

route.post("/create",valid,create)
route.patch("/update/:id", update)
route.delete("/delete/:id", remove)
route.get("/user", isAuth,Home)

route.get("/" ,newAuth,index)
route.get("/signup", signup)
route.get("/login", getLogin)
route.post("/login", passport.authenticate("local",
    {failureRedirect:"/login",
     successRedirect:"/"
    }
    ),local)

route.get("/profile", newAuth,profile)
route.get("/logout",Logout )
route.get("/reset", reset)
route.post("/updatePassword", updatePassword)
route.post("/forgot", passwordReset);
route.post("/verify", verify);

route.get("/forgot", getForgot)

module.exports = {route};