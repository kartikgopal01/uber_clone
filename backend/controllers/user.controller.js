const { validationResult } = require('express-validator');
const userModel=require('../models/user.model');
const userService=require('../services/user.service');


module.exports.registerUser=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {firstname,lastname,email,password}=req.body;
    const hashedPassword=await userModel.hashPassword(password);

    const user =await userService.createUser({...req.body,password:hashedPassword});

    const token=user.generateAuthToken();
    res.status(200).json({user,token});
}