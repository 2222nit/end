const mongoose = require("mongoose")


const userscheme = new mongoose.Schema({
    name:{ Type:String, required:true,trim:true},
    email:{ Type:String,required:true,trim:true},
    password:{ Type:String,required:true,trim:true},

},
{timeseriestamps:true}

)

module.exports = mongoose.model("user",userscheme)