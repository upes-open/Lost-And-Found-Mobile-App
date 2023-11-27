// feedbackRoute.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Corrected the spelling

const host = "https://lost-and-found.cyclic.app";

router.post('/', async (req, res) => {
    const db = mongoose.connection; // Corrected the spelling
    const feedback = req.body;
    const collection = db.collection('feedbacks');

    try {
        await collection.insertOne({
            email: feedback.email,
            feedback: feedback.feedback,
            date: new Date(),
        });

        console.log("Feedback received");
        res.json({ status: "Success", message: "Successfully registered feedback" });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
});

module.exports = router;
