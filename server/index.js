const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const EmployeeModel = require('./models/Employee.js');
require('dotenv').config(); // To use environment variables


const path =require( 'path');
const { fileURLToPath } = require('url');


const app = express();

app.use(express.json());
app.use(cors());



console.log(__dirname);
// client

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'/client/dist/index.html')));


// Use environment variable for MongoDB URI

const mongoURI = process.env.PASSWORDING;
console.log(`MongoDB URI: ${process.env.PASSWORDING}`);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.post("/login1", (req, res) => {
    const { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).json("Email and password are required");
    }

    EmployeeModel.findOne({email: email})
        .then(user => {
            if (user) {
               
                    if (user.password === password) {
                        res.json("Success")
                    } else {
                        res.json("Incorrect password")
                    }
                
            } else {
                res.json("No record existed");
            }
        })
        .catch(err => res.json({ error: "Internal Serbbber Error" }));
})

app.post('/register1',(req,res)=>{

    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=>res.json(err))


})

app.listen(3001,()=>{
    console.log("serber is on");
})



