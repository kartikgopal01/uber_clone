const http=require('http');
const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors');
const express=require('express');
const app=express();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');


connectToDb();

 
app.use(cors());


app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.use('/api/users',userRoutes);

module.exports=app;