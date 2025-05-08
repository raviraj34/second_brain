import mongoose from 'mongoose';
import { Jwt } from 'jsonwebtoken';
const jwt_SECRET = "raviraj123";
import { usermodel, contentmodel } from './db';
// const {usermodel} = require('./db');
import { contentmiddleware } from './contentmiddleware';



import express, { NextFunction } from 'express';
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
















app.post('/api/v1/content',contentmiddleware ,async (req,res) =>{
        const {link,type,title,tags} = req.body;

            await contentmodel.create({
                link:link,
                type:type,
                title:title,
                tags:tags
            }
            )




})





app.get('/api/v1/content',usermiddleware ,async (req,res) =>{
    
// @ts-ignore   
 const userId=req.userId;
 const content =await contentmodel.find({
    userId:userId;

 }).populate('userId')
 res.json({content})
})








app.delete('/api/v1/content',usermiddleware, (req,res) =>{
    const contentId = req.body.contentId;

    await contentmodel.deleteMany({
        _id:contentId,
        // @ts-ignore
        userId:req.userId  
    })

    res.json({
        message:"deleted"
    })
})






app.post('/api/v1/brain/share', (req,res) =>{
    res.send('hello world')
})


app.get('/api/v1/brain/:sharelink',(req,res) =>{

})


app.listen(3000);