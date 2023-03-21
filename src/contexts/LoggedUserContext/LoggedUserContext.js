import { createContext, useEffect, useState, useContext } from 'react'
import { AppContext } from '../AppContext';
import { auth } from '../../services';


export const LoggedUserContext = createContext()

export function LoggedUserProvider(props) {
  const { setLoadingApp } = useContext(AppContext);
  const [loggedUser, setLoggedUser] = useState(false)
  const [refreshUser, setRefreshUser] = useState(false)
 

  useEffect(() => {
    fetchData()
  }, [refreshUser])

  async function fetchData() {
    setLoadingApp(true)
    try {
      const data  = await auth.getUser()
      setLoggedUser(data)
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