import api from '../services/apiAdviceSlip';
import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

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
        const response = await api.get('/advice');

        console.log(response.data);

        res.status(StatusCodes.OK).json(response.data).end();
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.BAD_REQUEST).end();
    }
}

export default {
    healthCheck,
    findRandomAdvice
}