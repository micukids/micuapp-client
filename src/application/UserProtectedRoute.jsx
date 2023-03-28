import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function UserProtectedRoute({ redirectPath = "/login" }) {
    if (!localStorage.getItem('auth_token')) {
        return <Navigate to={redirectPath} replace />;
      }

  return <Outlet />;
}

export default UserProtectedRoute