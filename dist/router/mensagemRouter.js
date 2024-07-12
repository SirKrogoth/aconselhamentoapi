"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mensagemController_1 = __importDefault(require("../controllers/mensagemController"));
const router = (0, express_1.Router)();
router.get('/helthCheck', mensagemController_1.default.healthCheck);
router.get('/advice', mensagemController_1.default.findRandomAdvice);
exports.default = router;
