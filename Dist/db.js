"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentmodel = exports.tagmodel = exports.linkmodel = exports.usermodel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://raviraj:raviraj%40123@cluster0.g28pxiy.mongodb.net/todo-app");
const schema = mongoose_1.default.Schema;
const ObjectId = mongoose_1.default.Types.ObjectId;
const userSchema = new schema({
    email: { type: String, unique: true },
    password: String,
    name: String
});
const contenttype = ['image', 'audio', "video", "article"];
const contentSchema = new schema({
    link: { type: String, require: true },
    type: { type: String, enum: contenttype, require: true },
    title: { type: String, require: true },
    tags: [{ type: ObjectId, ref: 'Tag' }],
    userId: { type: ObjectId, ref: 'User', require: true },
});
//link schema 
const linkSchema = new schema({
    hash: { type: String, require: true },
    userId: { type: ObjectId, ref: 'User', require: true },
});
const tagSchema = new schema({
    _id: { type: ObjectId, require: true },
    title: { type: String, require: true }
});
exports.usermodel = mongoose_1.default.model('users', userSchema);
exports.linkmodel = mongoose_1.default.model('links', linkSchema);
exports.tagmodel = mongoose_1.default.model('tags', tagSchema);
exports.contentmodel = mongoose_1.default.model('content', contentSchema);
//this is used when we are using the require syntax
// module.exports = {
//     usermodel:usermodel,
//     linkmodel:linkmodel,
//     tagmodel:tagmodel,
//     contentmodel:contentmodel
// }
