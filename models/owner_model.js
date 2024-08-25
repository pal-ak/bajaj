const mongoose = require("mongoose");

const ownerSchema  = mongoose.Schema({

    fullname:{
        type: String,
        require: true,
        minLength: 3,
    },
    email:{
        type: String,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    product:{
        type:Array,
        default:[],
    },
    contact: Number,
    picture: String,
    gstin:String,
});

module.exports = mongoose.model("ownerSchema",ownerSchema);