const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const db = mongoose.connection;

router.post('/', async (req, res) => {
    const collection = db.collection('lostItem');
    const {
        description,
        date,
        phone,
        name,
        sapId,
        category,
        subcategory,
        itemName,
        itemId,
        itemLink,
        place
    } = req.body;
    try {
        const result = await collection.insertOne({
            description : description,
            date : date,
            phone : phone,
            name: name,
            sapId : sapId,
            category : category,
            subcategory : subcategory,
            itemName : itemName,
            itemId : itemId,
            itemLink : itemLink,
            place :     place
        });

        if (result.acknowledged && result.insertedId) {
            console.log("lostItem received!!!");
            res.json({ status: "Success", message: "Successfully registered lostItem" });
        } else {
            console.error("Error: Failed to insert lostItem");
            res.status(500).json({ status: "Error", message: "Internal Server Error" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "Error", message: "Internal Server Error" });
    }
});

module.exports = router;
