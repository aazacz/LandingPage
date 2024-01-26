import express from 'express'
import UserRoute from "./Router/UserRoute.js";
import dotenv from 'dotenv';
dotenv.config();

import cors from "cors";
import connectToMongoDB from "./Config/mongodbServer.js";
const { port } = process.env

const app = express()

connectToMongoDB()
// const corsOptions = {
//     origin: 'http://localhost:5173.',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Enable cookies and credentials
//   };
  
//   app.use(cors(corsOptions));
       
app.use(cors())

app.use('/images', express.static('public'));

app.use('/', UserRoute)

app.listen(port,()=>console.log("Backend Server is Running"))