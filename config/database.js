const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(mongoose.process.env.MONGODB_URL,({
        useNewUrlparser: true,
        useUnifiedTopology:true,
    }))
    .then(console.log("connected successfully"))
    .catch((error) =>{
        console.error(error);
        console.log("issue in connection");
        process.exit(1);
    })
}