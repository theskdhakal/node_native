// use the inquirer npm package to get the user-input
//use the qr-image npm package to convert url to qr-image
//create a text-file to save the user-input using native fs-module

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter the URL",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    var qr_image = qr.image(url);
    qr_image.pipe(fs.createWriteStream("qrImage.png"));

    fs.writeFile("data.txt", url, (err) => {
      if (err) throw err;
      console.log("File has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
