import { Sequelize } from 'sequelize';

const dbName = process.env.MYSQL_NAME!;
const dbUser = process.env.MYSQL_USER!;
const dbHost = process.env.MYSQL_HOST;
const dbPass = process.env.MYSQL_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    dialect: 'mysql',
    host: dbHost,
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    },
    logging: false,
    timezone: '-03:00'
});

export default sequelize;