import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
const jwt_SECRET = "raviraj123";
import { usermodel, contentmodel } from './db';
// const {usermodel} = require('./db');




import express from 'express';
const app = express();








app.post('/api/v1/signin', async function(req,res) {
    
    const{email,password} = req.body;

    const user = await usermodel.findOne({
        email:email
    })

    if(!user){
        res.status(403).json({
            message:"user not found"
        })
    }



})











app.post('/api/v1/signup',async function(req,res){

    const {email,password,name} = req.body;

    await usermodel.create({
        email:email,
        password:password,
        name:name
    })

    res.json({
        message:"success registered"
    })
    
})
















app.post('/api/v1/content', (req,res) =>{
    res.send('hello world')
})
app.delete('/api/v1/content', (req,res) =>{
    res.send('hello world')
})
app.post('/api/v1/brain/share', (req,res) =>{
    res.send('hello world')
})


app.get('/api/v1/brain/:sharelink',(req,res) =>{

})


app.listen(3000);