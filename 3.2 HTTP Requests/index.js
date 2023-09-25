import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log(req);
  res.send("<h1>Hello,World!</h1>");
});
app.get("/about", (req, res) => {
  //   console.log(req);
  res.send("<h5>About</h5>");
});

app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
