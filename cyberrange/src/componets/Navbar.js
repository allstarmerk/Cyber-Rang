import React from 'react';
import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
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
      </Flex>
    </Box>
  );
}

export default Navbar;

