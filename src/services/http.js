import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import { auth } from '../services';
import { AppContext } from "../contexts";

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
    // const {msgErro} =useContext(AppContext)
    if (error.response.status === 401) {
      const mensagemDeErro = error.response && error.response.data && error.response.data.error && error.response.data.error.message;
      // Redirecione para a página inicial
      auth.onSignOut()
      navigate("/");
      if(mensagemDeErro){
        AppContext.msgErro(mensagemDeErro)
      }
      
    }
    return Promise.reject(error);
  }
);
