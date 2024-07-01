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

    const signup =  async (user) => {
        const res = await registerResquest(user);
        setUser(res.data);
         console.log(res);
    }
    return(
        <AuthContext.Provider value={{
        signup,
        user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}