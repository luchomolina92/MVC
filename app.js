const express = require('express');
const router = require('./routers/main');
const app = express();
app.use(express.static ('public'));
app.use('/',router)
app.listen(3000, ()=>{
    console.log('Servidor funcionando'); });
    
     