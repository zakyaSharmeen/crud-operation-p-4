const mongoose = require("mongoose") 

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true,
    },
    email: {
        type:String,
        require: true,
    },
    address: {
        type:String,
    },

})


module.exports = mongoose.model("users", userSchema);