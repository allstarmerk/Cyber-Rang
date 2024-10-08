import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Stack, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log('Login form submitted with:', { username, password }); // Debugging

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Save token to localStorage
        console.log('Login successful, token received'); // Debugging
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message);
        console.error('Login failed:', data.message); // Debugging
      }
    } catch (err) {
      setError('An error occurred');
      console.error('Login error:', err); // Debugging
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Button type="submit" colorScheme="blue">Login</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;

