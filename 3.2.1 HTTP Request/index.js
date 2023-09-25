import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to backend</h1>");
});
app.get("/about", (req, res) => {
  res.send("<h4>All about myself</h4>");
});
app.get("/Contact", (req, res) => {
  res.send("<h5>contact me on theskdhakal@gmail.com</h5>");
});

app.listen(port, () => {
  console.log(`server is runnign on ${port}`);
});
