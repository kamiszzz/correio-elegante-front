import { createContext, useEffect, useState } from 'react'

export const LoggedUserContext = createContext()

export function LoggedUserProvider(props) {
  const [loggedUser, setLoggedUser] = useState(false)
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
      loggedUser,
      setLoggedUser,
      refreshUser,
      setRefreshUser,
      isUserLoading,
      setIsUserLoading,
    }} >
      {props.children}
    </LoggedUserContext.Provider>
  )
}