import { createContext, ReactNode, useEffect, useState } from "react";
import { IAddProductContext, IProduct } from "../utils/interfaces";
import { getRequest, postRequest } from "../utils/services";

const ProductContext = createContext<IAddProductContext | null>(null);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<IProduct[] | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getRequest("/get-product");
       
        setProduct(res.products);
        console.log(product)
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (data: FormData) => {
    try {
      await postRequest("/addProduct", data);
      const res = await getRequest("/get-product");
      setProduct(res.data.product);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ addProduct, product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;