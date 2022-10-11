const express=require('express');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const handlebars=require('express-handlebars');
const app=express();

app.get('/', function(req, res){
    //res.send('Inicial');
    res.sendFile(__dirname+"/index.html");
});

//Start
app.listen(3000,function(req, res){
   console.log('Servidor está rodando!');
});