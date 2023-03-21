import React,{  forwardRef,useContext } from "react";
import {Snackbar as SnackbarMui} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { AppContext } from "../../../contexts";

export const Snackbar = (props)=>{

    const { setOpenMensagem,openMensagem,mensagem, tipo } = useContext(AppContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenMensagem(false);
  };

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <SnackbarMui
        open={openMensagem}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={tipo} sx={{ width: "100%" }}>
          {mensagem}
        </Alert>
      </SnackbarMui>
    </Stack>
  );
}
