const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const lostItemCollectionName = "lostItem";

const lostItemSchema = new mongoose.Schema(
  {
    description: String,
    date: String,
    phone: String,
    name: String,
    sapId: String,
    category: String,
    subcategory: String,
    itemName: String,
    itemImage: String,
    place: String,
  },
  { collection: lostItemCollectionName }
);

const LostItem = mongoose.model(
  "LostItem",
  lostItemSchema,
  lostItemCollectionName
);

router.post("/", async (req, res) => {
  try {
    const {
      description,
      date,
      phone,
      name,
      sapId,
      category,
      subcategory,
      itemName,
      place,
      itemImage,
    } = req.body;

    const lostItem = new LostItem({
      description,
      date,
      phone,
      name,
      sapId,
      category,
      subcategory,
      itemName,
      itemImage,
      place,
    });
    await lostItem.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error submitting lost item form:", error);
    res.sendStatus(500);
  }
});

module.exports = router;
