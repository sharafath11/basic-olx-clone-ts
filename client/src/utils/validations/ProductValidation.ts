import {   showInfoToast } from "../toastNotifications";

export const validateProductForm = (formData: { name?: string; category?: string; description?: string; price?: number; image?: File | null }): boolean => {
  if (!formData.name || formData.name.trim().length < 3) {
     showInfoToast("Name must be at least 3 characters long.");
    return false;
  }

  if (!formData.category || formData.category.trim().length < 3) {
     showInfoToast("Category must be at least 3 characters long.");
    return false;
  }
  if (!formData.description || formData.description.trim().length < 5) {
     showInfoToast("Description must be at least 5 characters long.");
    return false;
  }
  if (formData.price === undefined || formData.price <= 0) {
     showInfoToast("Price must be greater than 0.");
    return false;
  }
  if (!formData.image) {
     showInfoToast("Please select an image.");
    return false;
  }

  return true;
};
