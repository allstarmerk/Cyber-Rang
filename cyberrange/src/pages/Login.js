
        const data = await response.json();
        setToken(data.token);
        localStorage.setItem('token', data.token); // Save token to localStorage
        navigate('/'); // Redirect to home page after successful login
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      setError('An error occurred');
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
