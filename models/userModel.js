import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    role : String,
    password : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

const userModel = mongoose.model("user", userSchema)

export default userModel;