const express = require('express')

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
app.listen(port,()=>{
    console.log(`My first server is running on post : ${port}`)
})