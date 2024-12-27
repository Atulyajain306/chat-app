import express from "express"
import protectroute from "../middlewere/protectroute.js";
import {getusersforsidebar} from "../controllers/usercontroller.js"
const router=express.Router();

router.post("/",protectroute,getusersforsidebar);

export default router;