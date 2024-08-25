const mongoose = require("mongoose");

const product_Schema = mongoose.Schema({
    
    image : String,
    name : String,
    price : String,

    discount:{
        type:Number,
        default :0,
    },

    bgcolor: String,
    panelcolor: String,
    textcolor : String,
});

module.exports = mongoose.model("product_Schema",product_Schema);

