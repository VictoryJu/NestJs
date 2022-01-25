"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
var data = [1, 2, 3, 4];
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is Mid");
    next();
});
app.get('/cats/som', function (req, res, next) {
    console.log("this is Som Mid");
    next();
});
app.get('/', function (req, res) {
    res.send({ cats: app_model_1.Cat });
});
app.get('/cats/blue', function (req, res, next) {
    res.send({ blue: app_model_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    res.send({ som: app_model_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log("this is Error Mid");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("server is on " + port);
});
//# sourceMappingURL=app.js.map