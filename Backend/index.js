const express = require("express")
const app = express()
            require('dotenv').config(); 
const UserRoute = require("./Router/UserRoute")
const port = process.env.port 
const cors = require('cors');

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