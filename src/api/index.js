import axios from "axios";
import { token } from "../helper/notification_helper";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const UPLOAD_BASE_URL = import.meta.env.VITE_API_UPLOAD_BASE_URL;

// let searchData = (value) => {
//   return value || null;
// };

//authntication without token
export const login = async (formData) =>
  await axios.post(`${BASE_URL}/auth/login`, formData);
export const register = async (formData) =>
  await axios.post(`${BASE_URL}/user/add_user`, formData);

const custom_request = axios.create();

custom_request.interceptors.request.use((config) => {
  const user_token = localStorage.getItem(token);
  if (user_token) {
    config.headers.Authorization = `Bearer ${user_token}`;
  }
  return config;
});

// password
export const changePassword = async (oldPassword, newPassword) =>
  await custom_request.post(`${BASE_URL}/auth/change_password`, {
    oldPassword,
    newPassword,
  });

// upload image
export const uploadImage = async (formData) =>
  await custom_request.post(`${UPLOAD_BASE_URL}/upload_images`, formData);
// export const uploadToS3 = async (qrImage, regNo) =>
//   await custom_request.post(`${UPLOAD_BASE_URL}/upload-qr`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       base64Data: qrImage,
//       fileName: `${regNo}.png`,
//     }),
//   });
export const deleteImage = async (formData) =>
  await custom_request.post(`${UPLOAD_BASE_URL}/delete_image`, formData);

// authntication
export const checkLoginStatus = async () =>
  await custom_request.get(`${BASE_URL}/auth/check-login`);
export const editUser = async (formData, id) =>
  await custom_request.put(`${BASE_URL}/user/edit_user/${id}`, formData);
export const forgotPassword = async (formData) =>
  await axios.post(`${BASE_URL}/auth/forgot_password`, formData);
export const resetPassword = async (formData) =>
  await axios.post(`${BASE_URL}/auth/reset-password`, formData);
export const VerifyResetLink = async (id) =>
  await axios.get(`${BASE_URL}/auth/verifyreset_link/${id}`);

//user
export const getSingleUser = async (id) =>
  await custom_request.get(`${BASE_URL}/user/get_single_user/${id || null}`);