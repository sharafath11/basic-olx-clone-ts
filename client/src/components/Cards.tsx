import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useNavigate } from "react-router-dom";


function Cards() {
  const products = useContext(ProductContext)?.product;
  console.log(products)
  const navigate=useNavigate()
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
                <div className="flex-none w-56 p-3 bg-white rounded-lg shadow-sm" key={product._id} onClick={() => navigate(`/product/${product._id}`)}>
  <div className="flex justify-end">
    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" fill="#002F34">
        <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z" />
      </svg>
    </div>
  </div>

  <div className="flex justify-center items-center my-4">
    <img src={product?.image} alt="product" className="h-24" />
  </div>

  <div className="text-center">
    <p className="text-lg font-bold">₹ {product.price}</p>
    <p className="text-md text-gray-600">{product.category}</p>
    <p className="text-sm text-gray-600">{product.name}</p>
  </div>

  <div className="flex justify-between mt-2">
    <div className="text-sm text-gray-500">{product.userId.address}</div>

    <div className="text-sm text-gray-500">{new Date(product.updatedAt).toLocaleDateString()}</div>
  </div>
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
      <div className="flex-none w-56 p-3 bg-white rounded-lg shadow-sm" key={product._id} onClick={() => navigate(`/product/${product._id}`)}>
  <div className="flex justify-end">
    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024" fill="#002F34">
        <path d="M830.798 448.659l-318.798 389.915-317.828-388.693c-20.461-27.171-31.263-59.345-31.263-93.033 0-85.566 69.605-155.152 155.152-155.152 72.126 0 132.752 49.552 150.051 116.364h87.777c17.299-66.812 77.905-116.364 150.051-116.364 85.547 0 155.152 69.585 155.152 155.152 0 33.687-10.802 65.862-30.293 91.811zM705.939 124.121c-80.853 0-152.204 41.425-193.939 104.204-41.736-62.778-113.086-104.204-193.939-104.204-128.33 0-232.727 104.378-232.727 232.727 0 50.657 16.194 98.948 47.806 140.897l328.766 402.133h100.189l329.716-403.355c30.662-40.727 46.856-89.018 46.856-139.675 0-128.349-104.398-232.727-232.727-232.727z" />
      </svg>
    </div>
  </div>

  <div className="flex justify-center items-center my-4">
    <img src={product?.image} alt="product" className="h-24" />
  </div>

  <div className="text-center">
    <p className="text-lg font-bold">₹ {product.price}</p>
    <p className="text-md text-gray-600">{product.category}</p>
    <p className="text-sm text-gray-600">{product.name}</p>
  </div>

  <div className="flex justify-between mt-2">
 
    <div className="text-sm text-gray-500">{product.userId.address}</div>
    <div className="text-sm text-gray-500">{new Date(product.updatedAt).toLocaleDateString()}</div>
  </div>
</div>


    );
  })
}


        
          
        </div>
      </div>
    </div>
  );
}

export default Cards;