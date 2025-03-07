"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authControllers_1 = require("../controllers/authControllers");
const authRouter = express_1.default.Router();
authRouter.post("/login", authControllers_1.loginController);
authRouter.post("/signup", authControllers_1.signupController);
exports.default = authRouter;
