// src/pages/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { token } = useContext(AuthContext);

  return token ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
