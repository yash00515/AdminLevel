const express = require("express");
const { route } = require("./routes/Routes")
const { db } = require("./config/database")
const { user } = require("./models/userSchema")
const { product } = require("./models/productSchema");
const cookie = require("cookie-parser")
const session = require("express-session")
const passport = require("passport")
const { LocalAuth } = require("./middleware/LocalAuth");
const { proute } = require("./routes/product.routes");
const { category } = require("./models/category.schema")
const { croute } = require("./routes/category.routes")
const { subcategory } = require("./models/subcategorySchema")
const { sroute } = require("./routes/subcategory.routes")
const port = 2005;

const app = express();

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

app.use(express.json())
app.use(express.urlencoded())
app.use(cookie());
app.use(
    session({
        secret: "privateKey",
        resave: false,
        saveUninitialized: false,
    })
);

LocalAuth(passport);
app.use(passport.initialize())
app.use(passport.session())


app.use("/", route);
app.use("/product", proute)
app.use("/category", croute)
app.use("/subcategory", sroute)


app.listen(port, (err) => {
    if (err) {
        console.log("Server is not started...");
        return false;
    }
    console.log("Server started on port:", port);
    console.log(`http://localhost:${port}`)
})