import React from 'react';
import { useAuth } from './context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
    const { user, isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to='/login' replace />;

    // Outlet to continue with the component inside
    return <Outlet />;
}

export default ProtectedRoute;
