import axios from "axios";

// Base URL from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

// API endpoints from environment variables
const ENDPOINTS = {
	LOGIN: process.env.NEXT_PUBLIC_API_LOGIN || "",
	REFRESH_TOKEN: process.env.NEXT_PUBLIC_API_REFRESH_TOKEN || "",
	REGISTER: process.env.NEXT_PUBLIC_API_REGISTER || "",
	DELETE_USER: process.env.NEXT_PUBLIC_API_DELETE_USER || "",
	GET_USER_INFO: process.env.NEXT_PUBLIC_API_GET_USER_INFO || "",
	EDIT_USER_PASSWORD: process.env.NEXT_PUBLIC_API_EDIT_USER_PASSWORD || "",
};

// Axios instance for API calls
const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

// Utility function to set Authorization header dynamically
export const setAuthToken = (token: string) => {
	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// API function definitions

/** Login user */
export const loginUser = async (data: { email: string; password: string }) => {
	const response = await api.post(ENDPOINTS.LOGIN, data);
	return response.data;
};

/** Refresh user token */
export const refreshToken = async (data: { refresh_token: string }) => {
	const response = await api.post(ENDPOINTS.REFRESH_TOKEN, data);
	return response.data;
};

/** Register user */
export const registerUser = async (data: {
	email: string;
	password: string;
}) => {
	const response = await api.post(ENDPOINTS.REGISTER, data);
	return response.data;
};

/** Delete current user */
export const deleteUser = async () => {
	const response = await api.delete(ENDPOINTS.DELETE_USER);
	return response.data;
};

/** Get current user information */
export const getUserInfo = async () => {
	const response = await api.get(ENDPOINTS.GET_USER_INFO);
	return response.data;
};

/** Edit user password */
export const editUserPassword = async (data: {
	current_password: string;
	new_password: string;
}) => {
	const response = await api.put(ENDPOINTS.EDIT_USER_PASSWORD, data);
	return response.data;
};

// Default export for the axios instance
export default api;
