import { FormEvent, useContext, useState } from "react";
import { IAddProduct } from "../utils/interfaces";
import ProductContext from "../context/ProductContext";
import { validateProductForm } from "../utils/validations/ProductValidation";
import { showInfoToast, showSuccessToast } from "../utils/toastNotifications";

const AddProduct = () => {
  const productHandler = useContext(ProductContext);
  const [formData, setFormData] = useState<Omit<IAddProduct, "image"> & { image: File | null }>({
    name: "",
    category: "",
    description: "",
    image: null, 
    price: 0,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("price", formData.price.toString());
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
if (fileInput.files && fileInput.files.length > 0) {
  const file = fileInput.files[0];
  const validImageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];

  if (!validImageTypes.includes(file.type)) {
    showInfoToast("Please select a valid image file (JPEG, PNG, WEBP, GIF).");
    setLoading(false);
    return;
  }

  formDataToSend.append("image", file);
} else {
  showInfoToast("Please select a valid file.");
  setLoading(false);
  return;
}

    if (!validateProductForm(formData)) {
      setLoading(false);
      return;
    }

    try {
      await productHandler?.addProduct(formDataToSend, true);
      showSuccessToast("Product added successfully!");
      window.location.reload()
      // setFormData({
      //   name: "",
      //   category: "",
      //   description: "",
      //   image: null,
      //   price: 0,
      // });
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />

        <label htmlFor="category" className="block mt-4 text-sm font-medium text-gray-700">Category</label>
        <input
          name="category"
          type="text"
          id="category"
          value={formData.category}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />

        <label htmlFor="description" className="block mt-4 text-sm font-medium text-gray-700">Description</label>
        <input
          name="description"
          type="text"
          id="description"
          value={formData.description}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />

        <label htmlFor="price" className="block mt-4 text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          value={formData.price}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          onChange={handleChange}
        />

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

        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? (
            <div className="spinner-border border-t-4 border-blue-700 w-6 h-6 border-solid border-4 rounded-full animate-spin"></div>
          ) : (
            'Upload and Submit'
          )}
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
