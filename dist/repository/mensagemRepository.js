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
const mensagemModel_1 = __importDefault(require("../models/mensagemModel"));
const Mensagem_1 = __importDefault(require("../models/Mensagem"));
const apiAdviceSlip_1 = __importDefault(require("../services/apiAdviceSlip"));
const uuid_1 = require("uuid");
function findRandomAdvice() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield apiAdviceSlip_1.default.get('/advice');
        const { slip } = response.data;
        const { id, advice } = slip;
        const codigo = (0, uuid_1.v4)();
        const mensagem = new Mensagem_1.default(codigo, advice, id, new Date());
        yield create(mensagem);
        return mensagem;
    });
}
function create(mensagem) {
    return __awaiter(this, void 0, void 0, function* () {
        return mensagemModel_1.default.create(mensagem);
    });
}
exports.default = {
    findRandomAdvice,
    create
};
