import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Simulation = () => {
  const [simulation, setSimulation] = useState(null);

  useEffect(() => {
    // Fetch simulation details from backend
    const fetchSimulation = async () => {
      try {
        const response = await fetch('/api/simulations/1'); // Use actual simulation ID
        const data = await response.json();
        setSimulation(data);
      } catch (error) {
        console.error('Error fetching simulation:', error);
      }
    };

    fetchSimulation();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Simulation Details</Heading>
      {simulation ? (
        <Box>
          <Heading size="md">{simulation.type}</Heading>
          <Text mt={2}>{simulation.description}</Text>
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default Simulation;

