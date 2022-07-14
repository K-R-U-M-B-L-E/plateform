import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export function PrivateRoute({children}) {

    const { user, setUser} = useContext(UserContext);

    return user ? children : <Navigate to="/login" />;
  };

export function ProtectedRoute({children}) {

  const { user, setUser} = useContext(UserContext);

  console.log(user)
  return user && user.credential==="admin" ? children : <Navigate to="/admin/login" />;
}

