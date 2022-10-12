const express = require("express");
const { resolve } = require("path");
const app = express();
const port = 3000;


app.use(
  "/", express.static(resolve(__dirname, "./build"))
);


app.listen(process.env.PORT || port, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("IT'S ALIVE");
})