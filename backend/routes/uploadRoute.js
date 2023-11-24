const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();

const uploadController = require('../controllers/uploadController');

const host = "https://lost-and-found.cyclic.app";

router.post('/upload', uploadController.uploadFile);

// router.post('/api/feedback', async (req, res) => {
    
//     const db = mongoose.connection;
//     const feedback = req.body;
//     const collection = db.collection('feedback');

//     try {
//         await collection.insertOne({
//             email: feedback.email,
//             feedback: feedback.feedback,
//             date: new Date(),
//         });

//         console.log("Feedback received");
//         res.json({ status: "Success", message: "Successfully registered feedback" });
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).json({ status: "Error", message: "Internal Server Error" });
//     }
// });

module.exports = router;
