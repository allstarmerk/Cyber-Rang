const express = require('express');
const router = express.Router();
const SimulationController = require('../controllers/simulationController');


router.get('/', SimulationController.getAllSimulations);


router.post('/', SimulationController.createSimulation);

module.exports = router;
