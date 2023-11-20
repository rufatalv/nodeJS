<<<<<<< HEAD
const port = process.env.PORT || 3002;
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const EventEmitter = require("events");

const chatEmitter = new EventEmitter();
app.get("/", respondHello);
app.get("/json", respondJson);
app.get("/static/*", respondStatic);
app.get("/chat", respondChat);
app.get("/sse", respondSSE);

app.listen(port, () => console.log(`Server listening on port ${port}`));

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

function respondChat(req, res) {
    const { message } = req.query;

    chatEmitter.emit("message", message);
    res.end();
}

function respondSSE(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
    });

    const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
    chatEmitter.on("message", onMessage);

    res.on("close", function() {
        chatEmitter.off("message", onMessage);
=======
const fs = require("fs");
const express = require("express");
const EventEmitter = require("events");
const chatEmitter = new EventEmitter();

require('dotenv').config()
const port = process.env.PORT || 1337;

const app = express();
app.get("/", respondText);
app.get("/json", respondJson);
app.get("/echo", respondEcho);
app.get("/static/*", respondStatic);
app.get("/chat", respondChat);
app.get("/sse", respondSSE);
app.listen(port, () => console.log(`Server listening on port ${port}`));

function respondText(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.end("hi");
}

function respondJson(req, res) {
    res.json({ text: "hi", numbers: [1, 2, 3] });
}

function respondEcho(req, res) {
    const { input = "" } = req.query;
    res.json({
        normal: input,
        shouty: input.toUpperCase(),
        characterCount: input.length,
        backwards: input.split("").reverse().join(""),
>>>>>>> d18f29633c4e9f6be255708a09e501ff68dc2d7e
    });
}

function respondStatic(req, res) {
    const filename = `${__dirname}/public/${req.params[0]}`;
    fs.createReadStream(filename)
        .on("error", () => respondNotFound(req, res))
        .pipe(res);
}

<<<<<<< HEAD
=======
function respondChat(req, res) {
    const { message } = req.query;
    chatEmitter.emit("message", message);
    res.end();
}

function respondSSE(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        Connection: "keep-alive",
    });
    const onMessage = (msg) => res.write(`data: ${msg}\n\n`);
    chatEmitter.on("message", onMessage);
    res.on("close", function() {
        chatEmitter.off("message", onMessage);
    });
}

>>>>>>> d18f29633c4e9f6be255708a09e501ff68dc2d7e
function respondNotFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
}