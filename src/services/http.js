import axios from "axios"
import { useHistory } from "react-router-dom";

export const http = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 10000
});


http.interceptors.request.use(
  (config) => {
    // Adicione o token de autenticação à requisição, se ele estiver disponível
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const history = useHistory();
    if (error.response.status === 401) {
      // Redirecione para a página inicial
      history.push("/");
    }
    return Promise.reject(error);
  }
);