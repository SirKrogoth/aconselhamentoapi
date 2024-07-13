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

export default {
    healthCheck,
    findRandomAdvice
}