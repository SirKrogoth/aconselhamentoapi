const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Aconselhamento API',
      version: '1.0.0',
      description: 'API que irá consumir dados da adviceAPISlip e salvar a msg no banco de dados.',
    },
  },
  apis: ['./src/router/*.ts'], // Caminho para os arquivos da API
};

const swaggerSpec = swaggerJsdoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
