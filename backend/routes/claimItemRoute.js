const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');

const db = mongoose.connection;

router.post('/', async (req, res) => {
  try {
    // Extract data from the request
    const { lostItemId, collectorName, collectorSapId, collectorNumber, collectoremail } = req.body;

    // Validate the presence of required fields
    if (!lostItemId || !collectorName || !collectorSapId || !collectorNumber || !collectoremail) {
      return res.status(400).json({ error: 'Missing required fields in the request' });
    }
    if (!mongoose.Types.ObjectId.isValid(lostItemId)) {
        console.log(lostItemId);
        return res.status(400).json({ error: 'Invalid lostItemId format' });
      }
      
    const collection = db.collection('lostItem'); // Adjust the collection name
    console.log('Received lostItemId:', lostItemId);

    const lostItem = await collection.findOneAndDelete({ _id: new mongoose.Types.ObjectId(lostItemId) });
    
    console.log('Result of findOneAndDelete:', lostItem);
    
    if (!lostItem) {
      return res.status(404).json({ error: 'Lost item not found' });
    }
    console.log(lostItem.description);
    // Check if the item is already collected
    if (lostItem.value && lostItem.value.isCollected) {
      return res.status(400).json({ error: 'Item is already collected' });
    }

    // Send a POST request to the server to add the item to the 'Collected Items' collection
    const collectedItemData = {
      description: lostItem.description || '',
      date: lostItem.date,
      phone: lostItem.phone,
      name: lostItem.name,
      sapId: lostItem.sapId,
      category: lostItem.category,
      subcategory: lostItem.subcategory,
      itemName: lostItem.itemName,
      itemId: lostItem.itemId,
      itemLink: lostItem.itemLink,
      place: lostItem.place,
      collectorName: collectorName,
      collectorSapId: collectorSapId,
      collectorNumber: collectorNumber,
      collectoremail: collectoremail,
      collectionTime: new Date().toISOString(),
    };

    const collectedItemResponse = await axios.post('http://localhost:3333/api/collected-items', collectedItemData);

    if (collectedItemResponse.data.status === 'Success') {
      res.status(200).json({ message: 'Item claimed and added to Collected Items successfully' });
    } else {
      res.status(500).json({ status: 'Error', message: 'Failed to add item to Collected Items' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'Error', message: 'Internal Server Error' });
  }
});

module.exports = router;
