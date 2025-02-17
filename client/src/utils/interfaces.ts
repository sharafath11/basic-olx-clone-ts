export interface User {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface AuthContextType {
  registerUser: (name: string, email: string, phoneNumber: string, password: string,address:string) => Promise<void>;
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
  addProduct: (data: FormData) => Promise<void>;
  product: IProduct[] | null;
}

export interface IProduct {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    address:string
  };
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
