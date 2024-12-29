const mongoose=require('mongoose');


function connectToDb(){
    mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.on('connected',()=>{
        console.log("Connected to DB");
    });
    mongoose.connection.on('error',()=>{
        console.log("Error connecting to DB");
    });
}

module.exports=connectToDb;