// src/components/Navbar.js
import React, { useContext } from 'react';
import { Box, Flex, Heading, Link, Spacer, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <Box bg="blue.500" color="white" p={4}>
      <Flex align="center">
        <Heading size="lg">Cyber Range</Heading>
        <Spacer />
        <Link as={RouterLink} to="/" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
          Home
        </Link>
        <Link as={RouterLink} to="/simulation" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
          Simulation
        </Link>
        <Link as={RouterLink} to="/progress" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
          Progress
        </Link>
        <Link as={RouterLink} to="/resources" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
          Resources
        </Link>
        {token ? (
          <Button onClick={logout} colorScheme="red" ml={4}>Logout</Button>
        ) : (
          <>
            <Link as={RouterLink} to="/login" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
              Login
            </Link>
            <Link as={RouterLink} to="/register" p={2} _hover={{ textDecoration: 'none', color: 'blue.200' }}>
              Register
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;

