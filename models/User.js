import { Schema, model } from "mongoose"

let collection = 'users'
let schema = new Schema({
    email: { type:String,required:true,unique:true },
    password: { type:String,required:true },
    photo: { type:String,required:true },
    role: { type:Number,default:0 },
    online: { type:Boolean,default:false },
    verified: { type:Boolean,default:true },
    verify_code: { type:String,required:true },
}, {
    timestamps: true
})

let User = model(collection, schema)
export default User
