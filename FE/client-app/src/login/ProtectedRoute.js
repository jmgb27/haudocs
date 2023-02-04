import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthValue } from '../context/Authvalue';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to='/Signin' replace/>;
  }
  return children;
};

export default ProtectedRoute;