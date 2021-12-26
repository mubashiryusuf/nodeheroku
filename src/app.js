const hbs = require("hbs");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
//using static web pages using express
app.set("view engine", "hbs");
app.set("views", template_path);
app.use(express.static(static_path));
hbs.registerPartials(partials_path);
// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
//error wrong route
app.get("*", (req, res) => {
  res.render("error", {
    errormsg: "Oops! Page not found",
  });
});
//listening to the local port
app.listen(port, () => {
  console.log(`listening to port at ${port}`);
});
