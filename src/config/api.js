// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const API_ENDPOINTS = {
  USER_REGISTER: `${API_BASE_URL}/api/user/register`,
  USER_LOGIN: `${API_BASE_URL}/api/user/login`,
  USER_PROFILE: `${API_BASE_URL}/api/user/profile`,
};

export default API_BASE_URL;
