"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var user_1 = __importDefault(require("./handlers/user"));
var logger_1 = __importDefault(require("./middlewares/logger"));
var app = (0, express_1.default)();
var address = "localhost:3000";
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(logger_1.default);
app.get("/", function (req, res) {
    res.send("Welcome to the second project !");
});
(0, user_1.default)(app);
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = app;
