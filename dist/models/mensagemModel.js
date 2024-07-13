"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const mysqldb_1 = __importDefault(require("../database/mysqldb"));
const mensagem = mysqldb_1.default.define('mensagens', {
    codigo: {
        type: sequelize_1.default.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    mensagem: {
        type: sequelize_1.default.STRING(255),
        allowNull: false
    },
    idMensagem: {
        type: sequelize_1.default.NUMBER,
        allowNull: false
    },
    data: {
        type: sequelize_1.default.DATE,
        allowNull: false
    }
});
exports.default = mensagem;
