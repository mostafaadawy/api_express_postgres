"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var authToken = function (req, res, next) {
    try {
        var authHeader = req.headers.authorization;
        if (authHeader === undefined)
            next(res.status(404).json("Token is Needed"));
        var bearer = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[0].toLowerCase();
        if (bearer !== "bearer")
            next(res.status(404).json("Defferent Token Type!"));
        var token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
        if (token === undefined)
            next(res.status(404).json("Authentication Token Needed!"));
        var decoded = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET_KEY);
        if (!decoded)
            next(res.status(404).json("Authentication Failed!"));
        next();
    }
    catch (err) {
        next(res.status(404).json("Something Wrong in Authentication!"));
    }
};
exports.default = authToken;
