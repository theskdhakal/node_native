//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let isAccess = false;
let pwd = "";

const pwdChecker = (req, res, next) => {
  pwd = req.body["password"];

  if (pwd === "ILoveProgramming") {
    isAccess = true;
  } else {
    isAccess = false;
  }
  next();
};

app.use(pwdChecker);

app.get("/", (req, res) => {
  res.sendFile(_dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (isAccess) {
    res.sendFile(_dirname + "/public/secret.html");
    // res.redirect("/check");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`server is listening n port ${port}`);
});
