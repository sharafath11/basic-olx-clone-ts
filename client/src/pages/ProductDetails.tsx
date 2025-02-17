import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const ProductDetails = () => {
  const params=useParams()
  const result = useContext(ProductContext)?.product?.filter((i) => i._id===params.id);
  console.log(useContext(ProductContext)?.product)
  console.log("dfger",result)
  return (
    <div className="pt-16 flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-12">
      <div className="p-4 w-full lg:w-2/3 flex justify-center">
        <img
          src={result&&result[0].image}
          alt="Product"
          className="w-full h-auto max-h-[85vh] object-cover rounded-lg shadow-md"
        />
      </div>
    
      <div className="p-4 w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="border border-gray-300 p-4 rounded-lg shadow-md">
          <p className="text-2xl font-bold text-gray-800">&#x20B9;{ result&& result[0].price}</p>
          <span className="block text-lg font-semibold text-gray-700 mt-2">{result&& result[0].name }</span>
          <p className="text-gray-600">Category</p>
          <span className="block text-sm text-gray-500">Posted on: {result&&new Date( result[0].createdAt).toLocaleDateString()}</span>
        </div>


        <div className="border border-gray-300 p-4 rounded-lg shadow-md mt-6">
          <p className="text-xl font-semibold text-gray-800">Seller Details</p>
          <p className="text-gray-700">Name: { result&&result[0].userId.name}</p>
          <p className="text-gray-700">Contact: +91 {result && result[0].userId.phoneNumber}</p>
          <p className="text-gray-700">Address:  { result&& result[0].userId.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails