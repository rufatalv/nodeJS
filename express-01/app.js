const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express!</h1>");
});

 
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening on ${process.env.PORT || 3002}`);
})
