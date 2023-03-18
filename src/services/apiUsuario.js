export const http = axios.create({
    // baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3060/',
    baseURL: 'http://localhost:5000/',
    timeout: 10000,
  })

  http.interceptors.request.use(
    async (request) => {
      const token = await localStorage.getItem('token')
      request.headers['Authorization'] = `Bearer ${token}` 
      return request
    },
    async (err) => {
      if (err.response.status === 401) await localStorage.clear()
      return Promise.reject(err)
    }
  )