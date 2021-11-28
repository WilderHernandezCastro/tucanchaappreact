import  mongoose  from "mongoose";
const Schema=mongoose.Schema;


const registroShema=new Schema({

    nombre:{type:String, required:[true,'Nombre obligatorio']},
    telefono:String,
    correo:String,
    apartar:String,
    mensaje:String,
    usuarioId:String,
    date:{type:Date, default: Date.now},
    activo:{type:Boolean, default:true}

});

//convertir a modelo
const Nota=mongoose.model('Nota',registroShema);
export default Nota;