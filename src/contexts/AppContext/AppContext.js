import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [loggedApp, setLoggedApp] = useState(false);
  const [openMensagem, setOpenMensagem] = useState(false);
  const [mensagem, setmensagem] = useState("");
  const [tipo, setTipo] = useState("success");

  return (
    <AppContext.Provider
      value={{
        loggedApp,
        setLoggedApp,
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
