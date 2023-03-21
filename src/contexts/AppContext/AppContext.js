import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [loadingApp, setLoadingApp] = useState(false);
  const [openMensagem, setOpenMensagem] = useState(false);
  const [mensagem, setmensagem] = useState("");
  const [tipo, setTipo] = useState("success");

  return (
    <AppContext.Provider
      value={{
        loadingApp, 
        setLoadingApp,
        setmensagem,
        openMensagem,
        setOpenMensagem,
        mensagem,
        tipo,
        setTipo,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
