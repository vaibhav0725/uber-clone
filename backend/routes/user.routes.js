const express=require("express");
const router=express.Router();
const {body}=require("express-validator");
const userController=require("../controllers/user.controller");
router.post("/register",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage("Firstname must be more than 3 letters"),
    body('password').isLength({min:6}).withMessage("Password must be of atleast 6 letters")
],userController.registerUser);
router.post("/login",[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("Password must be of atleast 6 letters")
],userController.loginUser)
module.exports=router;