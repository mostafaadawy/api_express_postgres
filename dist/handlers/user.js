"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var traites_1 = require("../helpers/traites");
var auth_1 = __importDefault(require("../middlewares/auth"));
var modelInst = new user_1.UStore();
var index = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var Us, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, modelInst.index()];
            case 1:
                Us = _a.sent();
                res.json(Us);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var show = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, u, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = parseInt(req.params.id);
                if (!user_id)
                    return [2 /*return*/, res.send("Wrong or Missed User id").status(400)];
                return [4 /*yield*/, modelInst.show(parseInt(req.params.id))];
            case 1:
                u = _a.sent();
                res.json(u);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var create = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, lastname, password, r, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, password = _a.password;
                if (!firstname || !lastname || !password)
                    return [2 /*return*/, res.send("Wrong or Missed parameters").status(400)];
                return [4 /*yield*/, modelInst.create({
                        id: 0,
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        hashedPassword: (0, traites_1.hashingKey)(req.body.password)
                    })];
            case 1:
                r = _b.sent();
                res.json(r);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _b.sent();
                console.log(e_3);
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, firstname, lastname, password, r, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, id = _a.id, firstname = _a.firstname, lastname = _a.lastname, password = _a.password;
                if (!id || !firstname || !lastname || !password)
                    return [2 /*return*/, res.send("Wrong or Missed parameters").status(400)];
                return [4 /*yield*/, modelInst.update({
                        id: req.body.id,
                        firstName: req.body.firstname,
                        lastName: req.body.lastname,
                        hashedPassword: (0, traites_1.hashingKey)(req.body.password)
                    })];
            case 1:
                r = _b.sent();
                res.json(r);
                return [3 /*break*/, 3];
            case 2:
                e_4 = _b.sent();
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var destroy = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user_id, r, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user_id = parseInt(req.body.id);
                if (!user_id)
                    return [2 /*return*/, res.send("Wrong or Missed User id").status(400)];
                return [4 /*yield*/, modelInst.delete(parseInt(req.body.id))];
            case 1:
                r = _a.sent();
                res.json(r);
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var authen = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, lastname, password, r, e_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, lastname = _a.lastname, password = _a.password;
                if (!firstname || !lastname || !password)
                    return [2 /*return*/, res.send("Wrong or Missed parameters").status(400)];
                return [4 /*yield*/, modelInst.authen(req.body.firstname, req.body.lastname, req.body.password)];
            case 1:
                r = _b.sent();
                if (r === null || r === undefined) {
                    res.status(401);
                    res.json("wrong credintials");
                }
                else {
                    res.json((0, traites_1.generateToken)(r.id, r.firstName, r.lastName));
                }
                return [3 /*break*/, 3];
            case 2:
                e_6 = _b.sent();
                console.error(e_6);
                res.status(500).json("server error");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var URoutes = function (app) {
    app.get("/users", auth_1.default, index);
    app.get("/users/:id", auth_1.default, show);
    app.put("/users", auth_1.default, update);
    app.post("/users", create);
    app.delete("/users", auth_1.default, destroy);
    app.post("/login", authen);
};
exports.default = URoutes;
