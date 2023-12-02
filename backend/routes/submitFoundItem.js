const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const foundItemCollectionName = "foundItem";

const foundItemSchema = new mongoose.Schema(
  {
    description: String,
    date: String,
    category: String,
    subcategory: String,
    itemName: String,
    place: String,
    ownerName: String,
    details: String,
    isIdentifiable: Boolean,
    itemImage: String,
  },
  { collection: foundItemCollectionName }
);

const FoundItem = mongoose.model(
  "FoundItem",
  foundItemSchema,
  foundItemCollectionName
);

router.post("/", async (req, res) => {

  try {
    const {
      description,
      date,
      category,
      subcategory,
      itemName,
      place,
      ownerName,
      details,
      isIdentifiable,
      itemImage,
    } = req.body;

    const foundItem = new FoundItem({
      description,
      date,
      category,
      subcategory,
      itemName,
      place,
      ownerName,
      details,
      isIdentifiable,
      itemImage,
    });
    await foundItem.save();

    res.sendStatus(200);
  } catch (error) {
    console.error("Error submitting found item form:", error);
    res.sendStatus(500);
  }
});

module.exports = router;
