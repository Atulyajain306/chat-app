import path from "path";
import express from "express";
import authroutes from "./routes/authroutes.js";
import connecttoMongoDB from "./db/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import messagerouters from "./routes/messageroutes.js"
import userroutes from "./routes/userroutes.js";
import { app, server } from "./socket/socket.js";
dotenv.config();
const PORT=process.env.PORT || 3000
const __dirname=path.resolve();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authroutes);
app.use("/api/messages",messagerouters);
app.use("/api/users",userroutes);
app.use(express.static(path.join(__dirname,"Frontend/dist")));

app.get("*",(req,res)=>{
     res.sendFile(path.join(__dirname,"Frontend","dist","index.html"));
})

server.listen(PORT,()=>{
    connecttoMongoDB();
   console.log("Server is running on 3000")});

