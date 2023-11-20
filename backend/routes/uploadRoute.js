const express = require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const router = express.Router();

const uploadController=require('../controllers/uploadController');

const host = "https://lost-and-found.cyclic.app";

router.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@lost-and-found.mczrz51.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to the database successfully");
    })
    .catch((error) => {
        console.log("Error connecting to the database", error);
    });

const db = mongoose.connection;


router.post('/upload', uploadController.uploadFile);
router.post(`${host}/feedback`, async(req,res) =>{
    const feedback =req.body
    
    const collection = db.collection('feedback');

    await collection.insertOne({
        email:feedback.email,
        feedback:feedback.feedback,
        date:`${Date.now()}`
    })

    console.log("Feedback received");
    res.send("Successfully registered feedback")
} )

module.exports = router; 