

const express = require('express');

const app=express();

app.use((req, res, next)=>{
    next();
})
app.use((req, res, next)=>{
    res.send('<h1> hello from the express </h1>');
})

app.listen(4000);
