const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');

const db = mongoose.connection;

router.post('/', async (req, res) => {
  const collection = db.collection('lostItem');
  const { category, subcategory } = req.body;

  if (category === undefined && subcategory === undefined) {
    res.status(400).json({ status: 'Error', message: 'Category and Subcategory undefined' });
  } else {
    try {
      let query;

      if (category !== undefined && subcategory !== undefined) {
        query = { category, subcategory };
      } else {
        query = {
          $or: [
            { category: category, subcategory: { $ne: null } },
            { subcategory: subcategory, category: { $ne: null } },
          ]
        };
      }

      const matchingItems = await collection.find(query).toArray();

      const responseObject = {
        status: 'Success',
        message: 'Matching items retrieved successfully',
        data: matchingItems
      };

      res.status(200).json(responseObject);
    } catch (error) {
      console.error('Error querying collection:', error);
      const errorResponse = {
        status: 'Error',
        message: 'Error retrieving matching items',
        error: error.message
      };

      res.status(500).json(errorResponse);
    }
  }
});

module.exports = router;
