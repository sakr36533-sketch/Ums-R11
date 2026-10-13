import { jwtDecode } from "jwt-decode";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phoneNumber: number;
  birthDate: string;
  image:string
}

interface AuthContextType {
  userData: User | null;
  saveUserData: () => void; 
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextProviderProps {
  children: ReactNode; 
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [userData, setUserData] = useState<User | null>(null); 

  const saveUserData = () => { 
    const encodedToken = localStorage.getItem('userToken'); 

    if (encodedToken) {
      const decodedToken = jwtDecode<User>(encodedToken);
      setUserData(decodedToken);
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userToken')) { 
      saveUserData();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userData, saveUserData }}>
      {children}
    </AuthContext.Provider>
  )
}