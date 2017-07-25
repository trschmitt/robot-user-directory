const path = require("path");
const mustacheExpress = require("mustache-express");
const express = require("express");
const app = express();
const DATA = require("./views/data");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("index.mustache", DATA);
});

app.listen(3010, function() {
	console.log("Successfully started App.");
});
