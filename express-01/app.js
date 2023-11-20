const http = require("http");
const querystring = require("querystring");
const port = process.env.PORT || 3002;
const fs = require("fs");
const express = require("express");

const app = express();

// const server = http.createServer(function (req, res) {
//   if (req.url === "/") return respondHello(req, res);
//   if (req.url === "/json") return respondJson(req, res);
//   if (req.url.match(/^\/echo/)) return respondEcho(req, res);
//   if (req.url.match(/^\/static/)) return respondStatic(req, res);
// });

app.get("/", respondHello);
app.get("/json", respondJson);
app.get("/static/*", respondStatic);

app.listen(port);

console.log("listening on port " + port);

function respondHello(req, res) {
    res.end("Welcome to Rufat Aliyev's first backend");
}

function respondJson(req, res) {
    res.setHeader("Content-Type", "application/json");
    res.json({
        status: 200,
        message: "Hello Json!",
    });
}

function respondEcho(req, res) {
    const { text = "" } = querystring.parse(req.url.split("?")[1]);
    console.log(text);
    res.setHeader("Content-Type", "application/json");
    res.json({
        text: text,
        uppercase: text.toUpperCase(),
        backwards: text.split("").reverse().join(""),
        characterCount: text.length,
    });
}

function respondStatic(req, res) {
    const filename = `${__dirname}/public/${req.params[0]}`;
    fs.createReadStream(filename)
        .on("error", () => respondNotFound(req, res))
        .pipe(res);
}

function respondNotFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
}