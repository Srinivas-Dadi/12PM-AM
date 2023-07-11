import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true
    },
    phno:{
        type: Number,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    }
});

export default mongoose.model('User',userSchema);
//user model