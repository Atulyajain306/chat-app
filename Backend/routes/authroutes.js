import express from "express"
import {login,signup,logout} from "../controllers/authcontrollers.js"

const router=express.Router();

router.post("/login",login);

router.post("/signup",signup);

router.post("/logout",logout);
export default router
