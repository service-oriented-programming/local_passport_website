const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const authRoutes = require("./routes/auth");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/passportAuth");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

app.use("/", authRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
