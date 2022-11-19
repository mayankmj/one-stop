import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    username :{
        type: String,
        required:true
        // unique:true
    },
    password :{
        type: String,
        required: true
    }
});
 const user = mongoose.model('user' , userSchema); // database is collection on mongo
 // user schema is applied on 'user';

 export default user;//sf