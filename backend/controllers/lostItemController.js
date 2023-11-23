const LostItem = require('../models/lostItem');

exports.addLostItem = async (req, res) => {
  try {
    const newItem = new LostItem(req.body);
    const savedItem = await newItem.save();
    console.log(savedItem);
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
