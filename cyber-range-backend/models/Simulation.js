const mongoose = require('mongoose');

const SimulationSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Simulation', SimulationSchema);

