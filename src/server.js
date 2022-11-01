require('dotenv').config()
const express=require('express');

const app=express();
const PORT = 3000

app.use('/', require('./routes/routes'));

app.listen(PORT, (req, res) => {
   console.log('Servidor está rodando!');
});

