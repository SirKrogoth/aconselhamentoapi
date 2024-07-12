"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.MYSQL_NAME;
const dbUser = process.env.MYSQL_USER;
const dbHost = process.env.MYSQL_HOST;
const dbPass = process.env.MYSQL_PASSWORD;
const sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    },
    logging: false,
    timezone: '-03:00'
});
exports.default = sequelize;
