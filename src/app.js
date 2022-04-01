// console.log("Subscribe to my channel - With Chanakya!");

//Import modules
const express = require("express");
const path = require("path");
const dogRoutes = require("./routes/dog.routes");

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(dogRoutes);

app.listen(PORT, (err) => {
  console.log(`Your dog server is up and running!`);
});
