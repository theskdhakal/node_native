const fs = require("fs");

// fs.writeFile("message.txt", "Hello from nodeJs", (err) => {
//   if (err) throw err;
//   console.log("object");
// });
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
