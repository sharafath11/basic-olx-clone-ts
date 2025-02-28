import axios from "axios";
import { showErrorToast } from "./toastNotifications";

export const baseUrl = "http://localhost:4000";

export const postRequest = async (url: string, body: object | FormData) => {
  try {
    const token = localStorage.getItem("token");
    const headers: Record<string, string> = token ? { Authorization: `Bearer ${token}` } : {};
    const res = await axios.post(`${baseUrl}${url}`, body, { headers });

    if (res.data.ok) {
      return res.data;
    }

    showErrorToast(res.data.msg || "Something went wrong!");
    return null;
  } catch (error: any) {
    showErrorToast(error?.response?.data?.msg || "Server error, try again!");
    return null;
  }
};
export const getRequest = async (url:string) => {
  try {
    const res = await axios.get(`${baseUrl}${url}`);
    if (res.data) return res.data;
    showErrorToast(res.data.msg)
  } catch (error) {
    showErrorToast("server eroor")
  }
}
