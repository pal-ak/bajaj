const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname :{
        type : String,
        minLength:3,
        trim: true,
    },
    email : String,
    password : String,

    cart:{
        type: Array,
        default: [],
    },

    isadmin: Boolean,
    orders:{
        type: Array,
        deault:[]
    },
    contact: Number,
    picture:String,
});

module.exports = mongoose.model("userSchema",userSchema);