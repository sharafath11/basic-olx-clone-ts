import { createContext, ReactNode } from "react";
import { IAddProductContext } from "../utils/interfaces";
import { postRequest } from "../utils/services";
const ProductContext = createContext<IAddProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const addProduct = async (data: object) => {
        const res = await postRequest("/addProduct", data);
        console.log(res)
  };

  return (
    <ProductContext.Provider value={{ addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
