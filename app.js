const express = require("express");
const app = express();
const port = 3000;
const date = new Date();
const theDay = date.getDay();
const theHour = date.getHours();
const arrHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const arrDays = [1, 2, 3, 4, 5];
if (arrDays.indexOf(theDay) !== -1 && arrHours.indexOf(theHour) !== -1) {
    app.use(express.static("public"));
    app.set("view engine", "pug");
    app.set("views", "./views");
    app.get("/services", function (req, res) {
        res.render("Our_services");
    });
    app.get("/contact", function (req, res) {
        res.render("Contact_us");
    });
    app.get("*", function (req, res) {
        res.render("Home");
    });
    app.listen(port, function () {
        console.log(
            "The server is running, " +
                " please, open your browser at http://localhost:%s",
            port
        );
    });
}
