// src/pages/Simulation.js
import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import { Box, Heading, Text } from '@chakra-ui/react';

const Simulation = () => {
  const [simulations, setSimulations] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchSimulations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/simulations', {
          headers: { 
            'Authorization': `Bearer ${token}` 
          }
        });

        if (response.ok) {
          const data = await response.json();
          setSimulations(data);
        }
      } catch (error) {
        console.error('Error fetching simulations:', error);
      }
    };

    fetchSimulations();
  }, [token]);

  return (
    <Box p={4}>
      <Heading mb={4}>Simulation Details</Heading>
      {simulations.length > 0 ? (
        simulations.map((simulation) => (
          <Box key={simulation._id} p={4} shadow="md" borderWidth="1px" borderRadius="md" mb={4}>
            <Heading size="md" mb={2}>{simulation.type}</Heading>
            <Text>{simulation.description}</Text>
          </Box>
        ))
      ) : (
        <Text>No simulations available.</Text>
      )}
    </Box>
  );
};

export default Simulation;

