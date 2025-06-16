const express = require('express')

const cors = require('cors');
const phones = require('./phones.json')
const app = express();
const port = 5000;

app.use(cors());

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

app.get('/phones/:id',(req,res)=>{
    const id = req.params.id;
    const ids=parseInt(id)
    console.log('id tata for id: ',ids)
    const phone = phones.find(phone=>phone.id === ids) || {};
    res.send(phone)
})

app.listen(port,()=>{
    console.log(`My first server is running on post : ${port}`)
})