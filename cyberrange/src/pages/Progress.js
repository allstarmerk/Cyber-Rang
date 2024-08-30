import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Progress = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch('/api/users/progress'); // Use actual endpoint
        const data = await response.json();
        setProgress(data);
      } catch (error) {
        console.error('Error fetching progress:', error);
      }
    };

    fetchProgress();
  }, []);

  return (
    <Box p={4}>
      <Heading mb={4}>Your Progress</Heading>
      {progress ? (
        <Box>
          <Text>Your current progress: {progress.status}</Text>
          {/* Add more progress details here */}
        </Box>
      ) : (
        <Text>Loading...</Text>
      )}
    </Box>
  );
};

export default Progress;

