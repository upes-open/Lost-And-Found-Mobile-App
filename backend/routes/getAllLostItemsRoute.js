const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const db = mongoose.connection;

router.get('/', async (req, res) => {
    try{
    const collection = db.collection('lostItem');
    const items = await collection.find({}).toArray();
    res.status(200).json(items);
    }
    catch(err){
        res.status(500).json({message: err.message});
    
    }
});

module.exports = router;