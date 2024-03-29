const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session');
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

app.use(express.static(path.join(__dirname, "static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'hbs');

app.use(session({
    secret: 'SeekhRahaHu'
}));
app.use("/", userRoutes);
app.use("/", blogRoutes);


mongoose.connect("mongodb://127.0.0.1:27017/blogs").then(() => {
    app.listen(3000, () => {
        console.log("server started at port 3000");
    })
});


