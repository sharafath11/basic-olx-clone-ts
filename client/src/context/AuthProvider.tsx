import { createContext, ReactNode, useState, useEffect } from "react";
import { postRequest } from "../utils/services";
import { AuthContextType, User } from "../utils/interfaces";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import { showErrorToast, showSuccessToast } from "../utils/toastNotifications";
import Swal from "sweetalert2";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const navigate = useNavigate();
  
  const decodeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: User = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
        localStorage.removeItem("token");
      }
    }
  };

  useEffect(() => {
    decodeToken();
  }, []);

  const registerUser = async (name: string, email: string, phoneNumber: string, password: string,address:string) => {
    try {
      const res = await postRequest("/register", { name, email, password, phoneNumber,address });
      if (res.ok) {
        showSuccessToast(res.msg);
        navigate("/login");
      } else {
        showErrorToast(res.msg);
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const loginUser = async (email: string, password: string) => {
    try {
      const res = await postRequest("/login", { email, password });
      if (res.ok) {
        showSuccessToast(res.msg);
        localStorage.setItem("token", res.token);
        decodeToken();
        navigate("/");
      } else {
        showErrorToast(res.msg);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
 
const logoutUser = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will be logged out of your account.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, log me out!',
    cancelButtonText: 'Cancel',
    reverseButtons: true, 
  }).then((result: { isConfirmed: any; }) => {
    if (result.isConfirmed) {
      localStorage.removeItem("token");
      setUser(null); 
      navigate("/login"); 
      showSuccessToast("Logged out successfully!"); 
    }
  });
};

  return <AuthContext.Provider value={{ registerUser, loginUser, user,logoutUser }}>{children}</AuthContext.Provider>;
};
