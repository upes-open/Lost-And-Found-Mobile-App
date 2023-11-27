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


app.use("/users", usersRoute);

// app.use("/*", (req, res, next) => {
//   res.json({
//     status: "false",
//   });
// });

app.listen(port, "0.0.0.0", () => {
  console.log(`API is running on port ${port}`);
});

