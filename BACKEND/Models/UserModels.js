const mongoose = require("mongoose");
const {Schema}=require("mongoose");

const userSchema = new Schema({
    username : {
        type: String,
        required: [true, "YOUR USERNAME IS REQUIRED " ],
    },
    email : {
        type : String ,
        required: [true, "YOUR EMAIL IS REQUIRED "],
        unique : true 
    },
    password : {
        type : String ,
        required: [true, "YOUR PASSWORD IS REQUIRED"]
    },
    created_At : { 
        type : Date,
        default: new Date()
    }
})

module.exports = mongoose.model("User", userSchema);