const express= require("express");
const router = express.Router();
const {Signup, Login}= require("../Controllers/AuthControllers.js")
const {userVerification}= require("../Middlewares/Authmiddlewares.js")

router.post("/signup",Signup);
router.post("/login", Login);
router.post("/" ,userVerification)

module.exports=router;