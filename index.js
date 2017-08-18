const path = require("path");
const mustacheExpress = require("mustache-express");
const express = require("express");
const app = express();
const DATA = require("./views/data");
const fs = require("fs");

app.set("port", process.env.PORT || 3010);

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.use("/", express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("users", DATA);
});

app.get("/:id", (req, res) => {
  let foundUser = DATA.users.find(user => {
    return user.id == req.params.id;
  });

  res.render("personal", foundUser);
});


app.listen(app.get("port"), err => {
  if (err) {
    throw err;
    exit(1);
  }
  console.log(
    `Node running in ${app.get("env")} mode @ http://localhost:${app.get(
      "port"
    )}`
  );
});
