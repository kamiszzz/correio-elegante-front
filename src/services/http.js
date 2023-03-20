import axios from "axios"

export const http = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 10000
});


http.interceptors.request.use(
  async (request) => {
    const token = await localStorage.getItem('token')
    request.headers['Authorization'] = `Bearer ${token}`
    return request
  },
  async (err) => {
    if (err.response.status === 401) {
      localStorage.clear() 
      window.location.reload(true);
    }
    return Promise.reject(err)
  }
)