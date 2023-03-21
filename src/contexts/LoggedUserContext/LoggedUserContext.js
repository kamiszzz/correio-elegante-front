import { createContext, useEffect, useState, useContext } from 'react'
import { AppContext } from '../AppContext';

export const LoggedUserContext = createContext()

export function LoggedUserProvider(props) {
  const { setLoggedUser } = useContext(AppContext);
  const [refreshUser, setRefreshUser] = useState(false)
  const [isUserLoading, setIsUserLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [refreshUser])

  async function fetchData() {
    try {
      setIsUserLoading(true)
    //   const { data: userData } = await api.get("/user/me/logged")
    //   setLoggedUser(userData)
    } catch (error) {
      setLoggedUser(false)
    } finally {
      setIsUserLoading(false)
    }
  }

  return (
    <LoggedUserContext.Provider value={{
      refreshUser,
      setRefreshUser,
      isUserLoading,
      setIsUserLoading,
    }} >
      {props.children}
    </LoggedUserContext.Provider>
  )
}