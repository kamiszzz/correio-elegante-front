import axios from "axios";
import { useNavigate } from "react-router-dom";
import { auth } from '../services';

export const http = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  timeout: 10000,
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
    const navigate = useNavigate();
    if (error.response.status === 401) {
      // Redirecione para a página inicial
      auth.onSignOut()
      navigate("/");
    }
    return Promise.reject(error);
  }
);
