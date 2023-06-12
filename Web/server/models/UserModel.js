//mongoose for creating a model e.g new user
const mongoose=require("mongoose");
//json web token for idk
const jwt =require("jsonwebtoken");
//bycrypt for salting  and hashing the password
const bycrypt=require("bcrypt")
//crypto for creating crytographic hash
const crypto =require("crypto")
//validator helps to validate the post and input fields
const validator=require("validator")
const UserSchema=new mongoose.Schema({
// name
name:{
    type:String,
    require:[true,"Please  Enter  your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should have more than 4 characters"],
},
email:{
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
},
password:{
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
},
avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  resetPasswordToken: String,
  resetPasswordExpire: Date,

})
// what is after this
module.exports = mongoose.model("User", UserSchema);