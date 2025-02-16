export interface User {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface AuthContextType {
  registerUser: (name: string, email: string, phoneNumber: string, password: string) => Promise<void>;
  loginUser: (email: string, password: string) => Promise<void>;
  user: object | null,
  logoutUser:()=>void
}

export interface IAddProduct {
  name: string;
  category: string;
  price: number;
  description: string;
  image: File | string; 
}

export interface IAddProductContext {
  addProduct: (arg0: FormData) => Promise<void>; 
  // addProduct: (name: string, category: string,price: number,description: string,image: File | string, ) => Promise<void>; 

}
