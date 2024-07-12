import sequelize, { Model, Optional } from 'sequelize';
import iMensagem from './interfaces/iMensagem';
import mysqldb from '../database/mysqldb';

interface iMensagemCreationAttributes extends Optional<iMensagem, 'codigo'>{}
export interface iMensagemModel extends Model<iMensagem, iMensagemCreationAttributes>, iMensagem{}

const mensagem = mysqldb.define<iMensagemModel>('mensagens', {
    codigo: {
        type: sequelize.STRING(255),
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
    },
    mensagem: {
        type: sequelize.STRING(255),
        allowNull: false
    }
});

export default mensagem; 