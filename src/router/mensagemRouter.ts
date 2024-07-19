import { Router } from 'express';
import mensagemController from '../controllers/mensagemController';

const router = Router();

/**
 * @swagger
 * /healthCheck:
 *   get:
 *     summary: Retorna o estado atual do servidor
 *     responses:
 *       200:
 *         description: O servidor está online e funcionando normalmente.
 */
router.get('/healthCheck', mensagemController.healthCheck);

/**
 * @swagger
 * /advice:
 *   get:
 *     summary: Retorna uma mensagem aleatória
 *     responses:
 *       200:
 *         description: Mensagem aleatória
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 codigo:
 *                   type: string
 *                   example: "1e57ca18-7cc1-4175-a974-3082e10143bc"
 *                 mensagem:
 *                   type: string
 *                   example: "Keep it simple"
 *                 idMensagem:
 *                   type: integer
 *                   example: 138
 *                 data: 
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-19T17:58:48.673Z"
 *       default:
 *          description: Unexpected error
 */
router.get('/advice', mensagemController.findRandomAdvice);

/**
 * @swagger
 * /findAdviceById/{slip_id}:
 *   get:
 *     summary: Retorna uma mensagem levando como base o código apresentado
 *     parameters:
 *       - in: path
 *         name: slip_id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Número do alerta dentro da base do advice
 *     responses:
 *       200:
 *         description: Mensagem por código
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 codigo:
 *                   type: string
 *                   example: "1e57ca18-7cc1-4175-a974-3082e10143bc"
 *                 mensagem:
 *                   type: string
 *                   example: "Keep it simple"
 *                 idMensagem:
 *                   type: integer
 *                   example: 138
 *                 data: 
 *                   type: string
 *                   format: date-time
 *                   example: "2024-07-19T17:58:48.673Z"
 *       default:
 *          description: Unexpected error
 */
router.get('/findAdviceById/:slip_id', mensagemController.findAdviceById);

export default router;
