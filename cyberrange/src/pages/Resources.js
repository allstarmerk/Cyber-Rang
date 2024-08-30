import React from 'react';
import { Box, Heading, Text, VStack, Divider, Link } from '@chakra-ui/react';

const resourcesList = [
  {
    title: 'Introduction to Cybersecurity',
    description: 'An overview of basic cybersecurity principles and practices.',
    link: '#', // Replace with actual link
  },
  {
    title: 'Advanced Network Security',
    description: 'Deep dive into network security measures and protocols.',
    link: '#', // Replace with actual link
  },
  {
    title: 'Ethical Hacking Techniques',
    description: 'Techniques and tools used by ethical hackers to secure systems.',
    link: '#', // Replace with actual link
  },
  // Add more resources as needed
];

const Resources = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Educational Resources</Heading>
      <Text fontSize="lg" mb={4}>
        Explore the following resources to enhance your knowledge in cybersecurity.
      </Text>
      <VStack spacing={4} align="start">
        {resourcesList.map((resource, index) => (
          <Box key={index} p={4} shadow="md" borderWidth="1px" borderRadius="md" bg="white">
            <Heading size="md" mb={2}>{resource.title}</Heading>
            <Text mb={2}>{resource.description}</Text>
            <Link href={resource.link} color="blue.500" isExternal>
              Learn More
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Resources;

