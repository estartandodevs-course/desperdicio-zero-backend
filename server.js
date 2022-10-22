const express=require('express');
const bodyParser=require('body-parser');
// const mysql=require('mysql');
// const handlebars=require('express-handlebars');
const app=express();
// const swaggerUi = require('swagger-ui-express');
// const swaggerFile = require('./swagger/swagger_output.json');

app.use('/healthcheck', require('./src/routes/health-checker'));

//Start
app.listen(3000,function(req, res){
   console.log('Servidor está rodando!');
});