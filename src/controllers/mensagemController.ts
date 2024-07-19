import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import mensagemRepository from '../repository/mensagemRepository';

function healthCheck(req: Request, res: Response, next: any){
    try {
        res.status(StatusCodes.OK).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function findRandomAdvice(req: Request, res: Response, next: any){
    try {
        const response = await mensagemRepository.findRandomAdvice();
        
        res.status(StatusCodes.OK).json(response).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

async function findAdviceById(req: Request, res: Response, next: any){
    try {
        //pegar o codigo no body
        const slip_id = req.params['slip_id'];

        const response = await mensagemRepository.findAdviceById(parseInt(slip_id));

        res.status(StatusCodes.OK).json(response).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    healthCheck,
    findAdviceById,
    findRandomAdvice
}