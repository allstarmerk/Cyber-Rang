import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box p={4}>
      <Heading mb={4}>Welcome to Cyber Range</Heading>
      <Text fontSize="lg">
        This is the home page where you can find an overview of our cyber range simulations and resources.
      </Text>
    </Box>
  );
}

export default Home;

