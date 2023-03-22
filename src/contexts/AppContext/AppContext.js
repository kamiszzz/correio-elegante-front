import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [loadingApp, setLoadingApp] = useState(false);
  const [openMensagem, setOpenMensagem] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [tipo, setTipo] = useState("success");
  
  const msgErro = (mensagem) => {
    setMensagem(mensagem);
    setTipo("error");
    setOpenMensagem(true)
  }
  const msgInfo = (mensagem) => {
    setMensagem(mensagem);
    setTipo("info");
    setOpenMensagem(true)
  }
  const msgWarn = (mensagem) => {
    setMensagem(mensagem);
    setTipo("warning");
    setOpenMensagem(true)
  }
  const msgSucce = (mensagem) => {
    setMensagem(mensagem);
    setTipo("success");
    setOpenMensagem(true)
  }


  return (
    <AppContext.Provider
      value={{
        loadingApp, 
        setLoadingApp,

        setOpenMensagem,
        openMensagem,

        mensagem,
        setMensagem,

        tipo,
        setTipo,

        msgErro,
        msgInfo,
        msgWarn,
        msgSucce
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
