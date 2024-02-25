import mongoose from "mongoose"
import { Schema } from "mongoose"

const msgSchema = new Schema({
    sender_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Uers",
        required:true
    },
    reciever_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Uers",
        required:true
    },
    msg:{
        type:String,
        required:true,
        unique:true
    }
})


const msgModel =  mongoose.model("Msg",msgSchema)
export default msgModel