import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [simulations, setSimulations] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setIsLoggedIn(false); // Update local state
    navigate('/'); // Redirect to home page
  };

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
      <Box mt={4}>
        {!isLoggedIn ? (
          <>
            <Button onClick={() => navigate('/login')} colorScheme="blue" mr={4}>Login</Button>
            <Button onClick={() => navigate('/register')} colorScheme="blue">Register</Button>
          </>
        ) : (
          <Button onClick={handleLogout} colorScheme="red">Sign Out</Button>
        )}
      </Box>
    </Box>
  );
}

export default Home;

