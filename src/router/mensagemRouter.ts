import { Router } from 'express';
import mensagemController from '../controllers/mensagemController';

const router = Router();

router.get('/helthCheck', mensagemController.healthCheck);
router.get('/advice', mensagemController.findRandomAdvice);

export default router;