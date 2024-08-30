// controllers/simulationController.js
const Simulation = require('../models/Simulation');

// Get all simulations
exports.getAllSimulations = async (req, res) => {
  try {
    const simulations = await Simulation.find();
    res.json(simulations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSimulation = async (req, res) => {
  const { type, description } = req.body;
  try {
    const newSimulation = new Simulation({ type, description });
    await newSimulation.save();
    res.status(201).json(newSimulation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
