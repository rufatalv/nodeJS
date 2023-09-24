const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Hello, I'm first middleware")
  next();
});

app.use((req, res, next) => {
  console.log("Hello, I'm second middleware")
  res.send('<h1>Hello World</h1>')

});

 
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening on ${process.env.PORT || 3002}`);
})