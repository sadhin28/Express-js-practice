const express = require('express')
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.get('/',(req,res)=>{
        res.send('Hellow world')
})
app.get('/data',(req,res)=>{
    res.send('Taosif Bin Sadhin')
})
app.get('/appdata',(req,res)=>{
    res.send('App Data')
})

app.get('/phones',(req,res)=>{
    res.send(phones)    
})

app.listen(port,()=>{
    console.log(`My first server is running on post : ${port}`)
})