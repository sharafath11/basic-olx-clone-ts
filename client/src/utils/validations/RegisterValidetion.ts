import {   showInfoToast } from "../toastNotifications";

export const registerValidation = (formData: { name?: string; email?: string; phoneNumber?: string; password?: string; address?: string }): boolean => {
  const validatePhoneNumber = (phoneNumber: string | undefined): boolean => {
    const regex = /^\+?[1-9]\d{1,14}$/;
    return regex.test(phoneNumber || '');
  };

  const validatePassword = (password: string | undefined): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(password || '');
  };

  const validateAddress = (address: string | undefined): boolean => {
    if (!address) {
      return false;  
    }
    return address.trim().length >= 5; 
  };
  

  if (formData.phoneNumber && !validatePhoneNumber(formData.phoneNumber)) {
      showInfoToast("Invalid phone number. It should be 10 digits.");
    return false;
  }

  if (formData.password && !validatePassword(formData.password)) {
      showInfoToast("Password must contain at least one capital letter and one number.");
    return false;
  }
 console.log(formData.address)
  if (formData.address && !validateAddress(formData.address)) {
      showInfoToast("Address must be at least 5 characters long.");
    return false;
  }

  const trimmedName = formData.name?.trim();
  if (trimmedName && trimmedName.length < 3) {
      showInfoToast("Name must be at least 3 characters long.");
    return false;
  }

  return true;
};
