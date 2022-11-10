const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/api/routes/*.js'];

swaggerAutogen(outputFile, endpointsFiles);
