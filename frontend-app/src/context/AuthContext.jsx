import { createContext, useState, useContext } from "react";
import { registerResquest } from '../api/auth';

export const AuthContext = createContext()

export const useAuth = () => {
const context = useContext(AuthContext)
if(!context){
    throw new Error("useAuth must be used within an AuthProvider")
}
return context;
}
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 
    const [isAuthenticated, setIsAuthenticated] = useState(false); 
    const [errors, setErrors] = useState([]); 


    const signup =  async (user) => {
        try {
              const res = await registerResquest(user);
        setUser(res.data);
        setIsAuthenticated(true);
         console.log(res);
        } catch (error) {
            // in the backend are set the errors
            setErrors(error.response.data)
        }
      
    }
    return(
        <AuthContext.Provider value={{
        signup,
        user,
        isAuthenticated,
        errors
        }}>
            {children}
        </AuthContext.Provider>
    )
}