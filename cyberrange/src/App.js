import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import Navbar from './componets/Navbar'; // Fixed typo from 'componets' to 'components'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Container maxW="container.xl" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;

