const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    name:{required:true, type:String,maxlenght:50 , minlength:1},
    price:{type:Number,min:[0,"Price should be positive"]},
    category:{type:String, enum:["Electronics" , "Clothing" , "Books" , "HomeAppliance"]},
    stock:{type:Number, min:[0, "Stock integer not be negative"]},
    sku:{type:String, required:true,unique:true},
    tags:[{
        type:String,
        uique:true,
        match: /[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    }]
},{versionKey: false})


const productModel = mongoose.model('product' , ProductSchema)

module.exports = productModel