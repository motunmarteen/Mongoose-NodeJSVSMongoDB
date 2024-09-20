const Person = require("../models/personModel");

// Create a new person
const createPerson = async (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  try {
    const newPerson = new Person({ name, age, favoriteFoods });
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating person", error: err.message });
  }
};

// Get all people
const getPeople = async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving people", error: err.message });
  }
};

// Other CRUD operations can be added similarly...

module.exports = {
  createPerson,
  getPeople,
};

