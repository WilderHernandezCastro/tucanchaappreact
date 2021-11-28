import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String,

},{
    timestamps: true, //cada que se guarde un dato se guarde con la fecha de creacin y actualizacion
    versionKey: false //
})

export default model('Product', productSchema) //nombre modelo,.. productSchema seguido lo importamos en carpeta controller archivo productController