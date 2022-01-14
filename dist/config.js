"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, HOSTING = _a.HOSTING, PORT = _a.PORT, DATABASE_PORT = _a.DATABASE_PORT, DATABASE_TEST = _a.DATABASE_TEST, DATABASE_NAME = _a.DATABASE_NAME, DATABASE_USER = _a.DATABASE_USER, DATABASE_PASSWORD = _a.DATABASE_PASSWORD, ENV = _a.ENV, JWT_SECRET_KEY = _a.JWT_SECRET_KEY, SALT_ROUNDS_COUNT = _a.SALT_ROUNDS_COUNT, PEPPER_KEY = _a.PEPPER_KEY;
exports.default = {
    port: PORT,
    host: HOSTING,
    dbPort: DATABASE_PORT,
    database: ENV === 'dev' ? DATABASE_NAME : DATABASE_TEST,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    pepper: PEPPER_KEY,
    salt: SALT_ROUNDS_COUNT,
    tokenSecret: JWT_SECRET_KEY,
};
