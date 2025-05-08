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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_SECRET = "raviraj123";
const db_1 = require("./db");
// const {usermodel} = require('./db');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.post('/api/v1/signin', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield db_1.usermodel.findOne({
            email: email
        });
        if (!user) {
            res.status(403).json({
                message: "user not found"
            });
        }
    });
});
app.post('/api/v1/signup', function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, name } = req.body;
        yield db_1.usermodel.create({
            email: email,
            password: password,
            name: name
        });
        res.json({
            message: "success registered"
        });
    });
});
app.post('/api/v1/content', (req, res) => {
    res.send('hello world');
});
app.delete('/api/v1/content', (req, res) => {
    res.send('hello world');
});
app.post('/api/v1/brain/share', (req, res) => {
    res.send('hello world');
});
app.get('/api/v1/brain/:sharelink', (req, res) => {
});
app.listen(3000);
