import React, { useContext, useState } from "react";

import { LockOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Avatar,
} from "../../components";

import { useFormik } from "formik";
import * as yup from "yup";
import { LoginContext, LoginProvider } from "./contex";

 function App() {
  const {loginLoading,handleLogin}=useContext(LoginContext)
  
  const validationSchema = yup.object().shape({
    nome: yup.string().required("O nome é obrigatório"),
    cpf: yup
      .string()
      .min(11, "O cpf deve ter 11 caracteres")
      .max(11, "O cpf deve ter 11 caracteres")
      .required("O cpf é obrigatória"),
  });

  const formik = useFormik({
    initialValues: {
      nome: "",
      cpf: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
     handleLogin(values);
    },
  });

  return (
    <Box sx={{ height: "100%", display: "grid", placeItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">Entrar</Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="nome"
            name="nome"
            label="Nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            error={formik.touched.nome && Boolean(formik.errors.nome)}
            helperText={formik.touched.nome && formik.errors.nome}
            margin="normal"
            fullWidth
            autoFocus
          />
          <TextField
            id="cpf"
            name="cpf"
            type="cpf"
            label="CPF"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            error={formik.touched.cpf && Boolean(formik.errors.cpf)}
            helperText={formik.touched.cpf && formik.errors.cpf}
            margin="normal"
            fullWidth
          />

          <Button
            // disabled={loginLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
        </form>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Box>
  );
}


export function Login(){
    return (<>
    <LoginProvider>
        <App/>
    </LoginProvider>
    </>)
}