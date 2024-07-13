import iMensagem from "./interfaces/iMensagem";

export default class Mensagem implements iMensagem{
    codigo: string;
    mensagem: string;
    idMensagem: Number;
    data: Date;

    constructor(codigo: string, mensagem: string, idMensagem: Number, data: Date){
        this.codigo = codigo;
        this.mensagem = mensagem;
        this.idMensagem = idMensagem;
        this.data = data;
    }
}