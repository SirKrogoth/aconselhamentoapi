import mensagemModel, { iMensagemModel } from '../models/mensagemModel';
import iMensagem from '../models/interfaces/iMensagem';
import iAdviceSlipResponse from '../models/interfaces/iAdviceSlipResponse';
import Mensagem from '../models/Mensagem';
import api from '../services/apiAdviceSlip';
import { v4 as uuid4 } from 'uuid';

async function findRandomAdvice(): Promise<iMensagem>{
    const response = await api.get<iAdviceSlipResponse>('/advice');
    const { slip } = response.data;
    const { id, advice } = slip;
    
    const codigo = uuid4();

    const mensagem = new Mensagem(codigo , advice, id, new Date());

    await create(mensagem);

    return mensagem;    
}

async function create(mensagem: iMensagem){
    return mensagemModel.create(mensagem);
}

export default {
    findRandomAdvice,
    create
}