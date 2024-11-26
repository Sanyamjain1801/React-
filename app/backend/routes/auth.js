const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');
//creating a user using POST
router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min: 3 }),
    body('password','Password must be atleast 5 characters').isLength({min: 5 }),
],async(req,res)=>{
    //if there are errors,return bad request
  const errors=validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()});
  }
  //check user is already exist
  try {
      let user = await User.findOne({email: req.body.email});
      if(user){
        return req.status(400).json({error:"Sorry user already exist"})
      }
      user=await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
      })
    
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }
    })
    
    module.exports = router
    
  

