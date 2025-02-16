import { FormEvent, useContext, useState } from "react";
import { IAddProduct } from "../utils/interfaces";
import ProductContext from "../context/ProductContext";

const AddProduct = () => {
  const productHandler = useContext(ProductContext);
  const [formData, setFormData] = useState<Omit<IAddProduct, "image"> & { image: File | null }>({
    name: "",
    category: "",
    description: "",
    image: null, 
    price: 0,
  });

  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2IwOWJiMGVhYzg5MGY3OTE1ZjIwMzciLCJlbWFpbCI6ImFiaXNoYXJmYXRoQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGFyZmF0aCBBYmkiLCJudW1iZXIiOiI2MjgyNTYwOTI4IiwiaWF0IjoxNzM5NzEwMzY5LCJleHAiOjE3Mzk3MTM5Njl9.gm9SgxrsJW-qTa-136s804Nko2zONs7dwOk5BivB9qs

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    if (!formData.image) {
      alert("Please select an image.");
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price.toString());
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      formDataToSend.append("image", fileInput.files[0]); 
    } else {
      alert("Please select a valid file.");
      return;
    }
  
    const response = await productHandler?.addProduct(formDataToSend, true);
  
    if (response) {
      alert("Product added successfully!");
    }
  };
  

  return (
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
            <img src={URL.createObjectURL(formData.image)} alt="Preview" className="w-48 h-48 object-cover mx-auto" />
          </div>
        )}

<input
  type="file"
  id="fileInput"  
  onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
/>


        <button onClick={handleSubmit} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Upload and Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
