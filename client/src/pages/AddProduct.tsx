import { FormEvent, useContext, useState } from "react";
import { IAddProduct } from "../utils/interfaces";
import ProductContext from "../context/ProductContext";

const AddProduct = () => {
  const productHandler = useContext(ProductContext);
  const [formData, setFormData] = useState<IAddProduct>({
    name: "",
    category: "",
    description: "",
    image: "",
    price: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    productHandler?.addProduct(formData);
  };

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />

          <label htmlFor="category" className="block mt-4 text-sm font-medium text-gray-700">Category</label>
          <input name="category" type="text" id="category" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />

          <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-700">Description</label>
          <input name="description" type="text" id="description" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />

          <label htmlFor="price" className="block mt-4 text-sm font-medium text-gray-700">Price</label>
          <input type="number" name="price" id="price" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" onChange={handleChange} />

          {formData.image && (
            <div className="mt-4">
              <img src={formData.image} alt="Preview" className="w-48 h-48 object-cover mx-auto" />
            </div>
          )}

          <input type="file" className="mt-4 block w-full" onChange={handleFileChange} />

          <button onClick={handleSubmit} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            Upload and Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
