import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  const [simulations, setSimulations] = useState([]);

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const response = await fetch('/api/simulations');
        const data = await response.json();
        setSimulations(data);
      } catch (error) {
        console.error('Error fetching simulations:', error);
      }
    };

    fetchSimulations();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Cyber Range</Heading>
      <Text fontSize="lg">
        This is the home page where you can find an overview of our cyber range simulations and resources.
      </Text>
      <Box mt={4}>
        <Heading size="md" mb={2}>Available Simulations</Heading>
        {simulations.length > 0 ? (
          <ul>
            {simulations.map((simulation, index) => (
              <li key={index}>{simulation.type}: {simulation.description}</li>
            ))}
          </ul>
        ) : (
          <Text>No simulations available.</Text>
        )}
      </Box>
    </Box>
  );
}

export default Home;


