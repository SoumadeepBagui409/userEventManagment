
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type: String
    },
    username:{
        type: String,
        required:true   
    },
    email:{
        type: String,
        required:true,
        unique:true
    }
})

const User = mongoose.model('User',userSchema);


module.exports = User;