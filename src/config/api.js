// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1';

// API Endpoints
export const API_ENDPOINTS = {
  // User endpoints
  USER_LOGIN: `${API_BASE_URL}/user/login`,
  USER_REGISTER: `${API_BASE_URL}/user/register`,
  USER_LOGOUT: `${API_BASE_URL}/user/logout`,
  GET_USER: `${API_BASE_URL}/user/getuser`,
  
  // Job endpoints
  GET_ALL_JOBS: `${API_BASE_URL}/job/getall`,
  GET_JOB_BY_ID: (id) => `${API_BASE_URL}/job/${id}`,
  POST_JOB: `${API_BASE_URL}/job/post`,
  GET_MY_JOBS: `${API_BASE_URL}/job/getmyjobs`,
  UPDATE_JOB: (id) => `${API_BASE_URL}/job/update/${id}`,
  DELETE_JOB: (id) => `${API_BASE_URL}/job/delete/${id}`,
  
  // Application endpoints
  POST_APPLICATION: `${API_BASE_URL}/application/post`,
  GET_EMPLOYER_APPLICATIONS: `${API_BASE_URL}/application/employer/getall`,
  GET_JOBSEEKER_APPLICATIONS: `${API_BASE_URL}/application/jobseeker/getall`,
  DELETE_APPLICATION: (id) => `${API_BASE_URL}/application/delete/${id}`,
};
