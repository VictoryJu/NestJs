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
app.use(express.json());
app.post('/cat', function (req, res) {
    try {
        var data_1 = req.body;
        console.log(data_1);
        app_model_1.Cat.push(data_1);
        res.status(200).send({
            success: true,
            data: { data: data_1 }
        });
    }
    catch (e) {
    }
});
app.get('/cats', function (req, res) {
    try {
        var cats = app_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get('/cats/:id', function (req, res) {
    try {
        var id_1 = req.params.id;
        var cat = app_model_1.Cat.find(function (cat) {
            return cat.id === id_1;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.use(function (req, res, next) {
    console.log("this is Error Mid");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("server is on " + port);
});
//# sourceMappingURL=app.js.map