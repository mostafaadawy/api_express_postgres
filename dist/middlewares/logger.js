"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    console.log("current visited url is: ".concat(req.url));
    next();
};
exports.default = logger;
