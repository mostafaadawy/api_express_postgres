"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("./logger"));
var auth_1 = __importDefault(require("./auth"));
var middlewares = [auth_1.default, logger_1.default];
exports.default = middlewares;
