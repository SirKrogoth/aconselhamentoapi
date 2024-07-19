import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import mensagemRouter from '../router/mensagemRouter';

const setupSwagger = require('../../swagger.js');
const app = express();

setupSwagger(app);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(mensagemRouter);


export default app;