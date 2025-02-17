import { useContext } from "react";
import ProductContext from "../context/ProductContext";


function Cards() {
  const products = useContext(ProductContext)?.product;
  return (
    <div className="p-4">

      <div className="mb-6 bg-gray-100 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl text-gray-800">Quick Menu</span>
          <span className="text-sm text-gray-800">View more</span>
        </div>
        <div className="flex overflow-x-auto space-x-4 pb-4">
        
          {
            products?.map((product) => {
              return (
                <div className="flex-none w-56 p-3 bg-white rounded-lg shadow-sm" key={product._id}>
                <div className="flex justify-end">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex justify-center items-center my-4">
                  <img src={product?.image} alt="product" className="h-24" />
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold">₹ { product.price}</p>
                    <p className="text-md text-gray-600">{ product.category}</p>
                    <p className="text-sm text-gray-600">{product.name}</p>
                </div>
                  <div className="text-right text-sm text-gray-500 mt-2">{ product.updatedAt}</div>
              </div>
             )
           })
        }

         
          
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="mb-4">
          <span className="text-2xl text-gray-800">Fresh recommendations</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

          {
            products?.map((product) => {
              return (
                <div className="flex-none w-56 p-3 bg-white rounded-lg shadow-sm">
                <div className="flex justify-end">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                </div>
                <div className="flex justify-center items-center my-4">
                  <img src={product?.image} alt="product" className="h-24" />
                </div>
                <div className="text-center">
                    <p className="text-lg font-bold">₹ { product.price}</p>
                    <p className="text-md text-gray-600">{ product.category}</p>
                    <p className="text-sm text-gray-600">{product.name}</p>
                </div>
                  <div className="text-right text-sm text-gray-500 mt-2">{ product.updatedAt}</div>
              </div>
             )
           })
        }

        
          
        </div>
      </div>
    </div>
  );
}

export default Cards;