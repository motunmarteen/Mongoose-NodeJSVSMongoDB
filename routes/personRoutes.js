const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

// POST request to create a person
router.post("/", personController.createPerson);

// GET request to retrieve all people
router.get("/", personController.getPeople);

// Add other routes for updating, deleting, etc.

module.exports = router;
