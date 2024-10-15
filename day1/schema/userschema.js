// A database schema defines how data is organized within a relational database; 
// this is inclusive of logical constraints such as, table names, fields, 
// data types and the relationships between these entities.
 
const mongose = require("mongoose");

const myUser = mongose.Schema({
    name :{
        type :String,
        required :true
    },
    email :{
        type :String,
        required :true
    },
    password :{
        type :String,
        required :true
    },
    age :{
        type :Number,
        required :true
    },
    image :{
        type :String,
        required :true
    },
    role :{
        type :Number,
        required :true
    },
},
{timestamps:true});
module.exports = mongose.model("Users",myUser)