import mongoose from "mongoose";

mongoose.connect("mongodb+srv://raviraj:raviraj%40123@cluster0.g28pxiy.mongodb.net/todo-app");
const schema =  mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const userSchema = new schema({
    email:{type:String , unique:true},
    password:String,
    name:String
});


const contenttype = ['image','audio',"video","article"];

const contentSchema = new schema({
    link:{type:String , require:true},
    type:{type:String , enum:contenttype,require:true},
    title:{type:String , require:true},
    tags:[{type:ObjectId ,ref:'Tag'}],
    userId:{type:ObjectId ,ref:'User', require:true},

});



//link schema 

const linkSchema = new schema({
    hash:{type:String ,require:true},
    userId:{type:ObjectId ,ref:'User', require:true},
});


const tagSchema = new schema({
    _id:{type:ObjectId ,require:true},
    title:{type:String, require:true}
})


export const usermodel = mongoose.model('users',userSchema);
export const linkmodel = mongoose.model('links',linkSchema);
export const tagmodel = mongoose.model('tags',tagSchema);
export const contentmodel = mongoose.model('content',contentSchema);



//this is used when we are using the require syntax

// module.exports = {
//     usermodel:usermodel,
//     linkmodel:linkmodel,
//     tagmodel:tagmodel,
//     contentmodel:contentmodel
// }