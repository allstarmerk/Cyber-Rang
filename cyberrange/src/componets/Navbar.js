import React, { useState, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
    <Box p={4} bg="gray.800" color="white">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Button onClick={() => navigate('/')} colorScheme="teal" variant="outline">Home</Button>
        </Box>
        <Box>
          {!isLoggedIn ? (
            <>
              <Button onClick={() => navigate('/login')} colorScheme="teal" variant="outline" mr={4}>Login</Button>
              <Button onClick={() => navigate('/register')} colorScheme="teal" variant="outline">Register</Button>
            </>
          ) : (
            <Button onClick={handleLogout} colorScheme="red" variant="outline">Sign Out</Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
