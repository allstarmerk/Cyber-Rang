// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Home from './pages/Home';
import Simulation from './pages/Simulation';
import Progress from './pages/Progress';
import Resources from './pages/Resources';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Container maxW="container.xl" p={4}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<ProtectedRoute element={<Simulation />} />} />
            <Route path="/progress" element={<ProtectedRoute element={<Progress />} />} />
            <Route path="/resources" element={<ProtectedRoute element={<Resources />} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
}

export default App;

