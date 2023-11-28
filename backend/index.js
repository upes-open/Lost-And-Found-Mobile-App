require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3333;
const uploadRoute = require("./routes/uploadRoute.js");
const deleteRoute = require("./routes/deleteRoute.js");
const usersRoute = require("./routes/usersRoute.js");
const lostItemRoute = require("./routes/lostItemRoute.js");
const foundRoute = require("./routes/foundRoute.js");
const getlostItemRoute = require("./routes/getlostItemRoute.js");
const collectedItemRoute = require("./routes/collectedItemRoute.js");
const claimItemRoute = require("./routes/claimItemRoute.js");
const getAllFoundItems = require("./routes/getAllFoundItemsRoute.js");
const getAllLostItems = require("./routes/getAllLostItemsRoute.js");
const cors = require("cors");
const { db } = require("./db.js");
const feedbackRoute = require("./routes/feedbackRoute.js");
const connectionString = process.env.MONGO_URI;

app.use(express.json()); // Add this line to enable JSON parsing
db(connectionString);

app.use(
  cors({
    origin: "*",
  })
);
app.post("/upload", uploadRoute);
app.use("/delete", deleteRoute);
app.use("/api/lost", lostItemRoute);
app.use("/api/feedback", feedbackRoute);
app.use("/api/found", foundRoute);
app.use("/api/get-lost-items",getlostItemRoute);
app.use("/api/collected-items", collectedItemRoute);
app.use("/api/claim-items", claimItemRoute);
app.use("/api/get-all-lost-items", getAllLostItems);
app.use("/api/get-all-found-items", getAllFoundItems);


app.use("/users", usersRoute);

// app.use("/*", (req, res, next) => {
//   res.json({
//     status: "false",
//   });
// });

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
