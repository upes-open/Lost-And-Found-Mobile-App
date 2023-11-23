const mongoose = require('mongoose');

const lostItemSchema = new mongoose.Schema({
  description: String,
  date: String,
  phone: String,
  name: String,
  sapId: String,
  category: String,
  subcategory: String,
  itemName: String,
  itemId : { type: String, default: null },
  itemLink: { type: String, default: null },
  place: String,
});

const LostItem = mongoose.model('lostItem', lostItemSchema);

module.exports = LostItem;
