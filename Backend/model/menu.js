import mongoose from "mongoose";

const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    serves:{
        type: Number,
        required: true,
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }
})

export default mongoose.model('Menu',menuSchema);
// menu model