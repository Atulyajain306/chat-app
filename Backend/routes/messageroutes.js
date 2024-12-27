import express from "express"
import  { sentMessage } from "../controllers/messagecontroller.js"
import protectroute from "../middlewere/protectroute.js";
import { getMessages } from "../controllers/messagecontroller.js";
const router=express.Router();

router.get("/:id",protectroute,getMessages)
router.post("/send/:id",protectroute,sentMessage)
export default router