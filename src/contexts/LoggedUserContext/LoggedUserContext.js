import { createContext, useEffect, useState, useContext } from 'react'
import { AppContext } from '../AppContext';

export const LoggedUserContext = createContext()

export function LoggedUserProvider(props) {
  const { setLoadingApp } = useContext(AppContext);
  const [loggedUser, setLoggedUser] = useState(false)
  const [refreshUser, setRefreshUser] = useState(false)
 

  useEffect(() => {
    fetchData()
  }, [refreshUser])

  async function fetchData() {
    try {
      setLoadingApp(true)
    //   const { data: userData } = await api.get("/user/me/logged")
    //   setLoggedUser(userData)
    } catch (error) {
      setLoggedUser(false)
    } finally {
      setLoadingApp(false)
    }
  }

  return (
    <LoggedUserContext.Provider value={{
      refreshUser,
      setRefreshUser,
      setLoggedUser,
      loggedUser
    }} >
      {props.children}
    </LoggedUserContext.Provider>
  )
}