require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const uploadRoute = require('./routes/uploadRoute.js');
const deleteRoute = require('./routes/deleteRoute.js');

app.use(express.json()); // Add this line to enable JSON parsing

app.post("/upload", uploadRoute);
app.use("/delete", deleteRoute);

app.use("/*", (req, res, next) => {
    res.json({
        "status": "false"
    });
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});
