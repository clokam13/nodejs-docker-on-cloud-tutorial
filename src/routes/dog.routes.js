const express = require("express");
const path = require("path");

const router = express.Router();

// Define Dog Breeds array
const dogs = [
  { id: "1", name: "Happy", breed: "Golden Retriever" },
  { id: "2", name: "Silky", breed: "Labrador" },
  { id: "3", name: "Mika", breed: "Husky" },
];

// GET route for Dogs
router.get("/dogs", (req, res) => {
  res.status(200).send(dogs);
});

// GET route for Dog Breed Search
router.get("/dog/:name", (req, res) => {
  var notFound = true;
  // Find dog breed based on name
  dogs.forEach((dog) => {
    if (dog.name == req.params.name) {
      //res.status(200).send(`${req.params.name} is a ${dog.breed}`);
      notFound = false;
      res.status(200).send(dog);
    }
  });

  if (notFound) res.sendStatus(404);
});

router.get("/happy", (req, res) => {
  // Send HTML file in response
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
