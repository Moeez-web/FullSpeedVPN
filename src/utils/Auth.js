

import axios from 'axios';
import { toast } from 'react-hot-toast';


// Base endpoint
const BASE_URL = "https://api.full-speed.net/api/v1/";
// Create an instance of Axios with the base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
});


// Function to handle errors
const handleErrors = (error) => {
  if (error.response) {
    toast.error(error.response.data.error,{
        duration: 3000,
        position: 'top-center'
      })
    // Server responded with a status other than 200 range
    // console.error('Error Response:', error.response.data);
    // console.error('Status Code:', error.response.status);
    // console.error('Headers:', error.response.headers);
  }
};

// Dynamic API function
export const api = (endpoint) => ({
    getExample: async (params, authorization) => {
      try {
        const headers = authorization ? { Authorization: `Bearer ${authorization}` } : {};
        const response = await apiClient.get(endpoint, { params, headers });
        
        toast.success(response.message, {
          duration: 3000,
          position: 'top-center'
        });
  
        return response.data;
      } catch (error) {
        handleErrors(error);
        throw error;
      }
    },
  
    postExample: async (data, authorization) => {
      try {
        const headers = authorization ? { Authorization: `Bearer ${authorization}` } : {};
        const response = await apiClient.post(endpoint, data, { headers });
  
        toast.success(response.data.message ?? "Successful", {
          duration: 3000,
          position: 'top-center'
        });
  
        return response.data;
      } catch (error) {
        handleErrors(error);
        throw error;
      }
    },
  
    putExample: async (id, data, authorization) => {
      try {
        const headers = authorization ? { Authorization: `Bearer ${authorization}` } : {};
        const response = await apiClient.put(`${endpoint}/${id}`, data, { headers });
  
        return response.data;
      } catch (error) {
        handleErrors(error);
        throw error;
      }
    },
  
    deleteExample: async (id, authorization) => {
      try {
        const headers = authorization ? { Authorization: `Bearer ${authorization}` } : {};
        const response = await apiClient.delete(`${endpoint}/${id}`, { headers });
  
        return response.data;
      } catch (error) {
        handleErrors(error);
        throw error;
      }
    },
  });
  

export function setUserData(userData){
    localStorage.setItem('token', userData.token);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('account_type', userData.account_type);
}



// Export the dynamic API function

