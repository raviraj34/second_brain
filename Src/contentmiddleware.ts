import { jwt } from "jsonwebtoken";
const jwt_SECRET = "raviraj";

import { Request, Response, NextFunction } from "express";







export const  contentmiddleware =(req:Request,res:Response,next:NextFunction) =>{
    const header = req.headers["authorization"];
    const decode = jwt.verify(header as String,jwt_SECRET);

    if(decode){
        req.userId = decode.id;
        next();
    } else{
        res.status(403).json({
            message:"user not found"
        })
    }
}