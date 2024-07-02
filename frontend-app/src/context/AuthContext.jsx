import { createContext, useState, useContext, useEffect } from 'react';
import { registerResquest, loginRequest } from '../api/auth';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

    const signup = async (user) => {
        try {
            const res = await registerResquest(user);
            setUser(res.data);
            setIsAuthenticated(true);
            console.log(res);
        } catch (error) {
            // in the backend are set the errors
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
        } catch (error) {
            console.log(error);
            // in the backend are set the errors
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message]);
        }
    };

    // to delete the displayed error message after a time
    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 5000);
            // to delete the time if not use
            return () => clearTimeout(timer);
        }
    }, [errors]);
    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                user,
                isAuthenticated,
                errors,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
