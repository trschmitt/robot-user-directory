const path = require("path");
const mustacheExpress = require("mustache-express");
const express = require("express");
const app = express();
const DATA = require("./views/data");
const fs = require("fs");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
	res.render("users.mustache", DATA);
});

app.get("/:username", (req, res) => {
	let foundUser = DATA.users.find(
		user => user.username === req.params.username
	);

	res.render("personal", { users: foundUser });
});

app.use("/", express.static(path.join(__dirname, "public")));

app.listen(3010, function() {
	console.log("Successfully started App.");
});
