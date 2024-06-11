const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const EmployeeModel = require('./models/Employee.js');
require('dotenv').config(); // To use environment variables

const app = express();

app.use(express.json());
app.use(cors());

// Use environment variable for MongoDB URI
const mongoURI = "mongodb://127.0.0.1:27017/employee";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

app.post("/login", (req, res) => {
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

app.post('/register',(req,res)=>{

    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err=>res.json(err))


})

app.listen(3001,()=>{
    console.log("serber is on");
})



