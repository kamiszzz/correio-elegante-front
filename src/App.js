import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { LoggedUserContext } from "./contexts";
import { Layout, AppLoadingProgress } from './components'

export function App() {
  const { loggedUser, isUserLoading } = useContext(LoggedUserContext)

  if (!loggedUser && isUserLoading) return <AppLoadingProgress />

  else return (
    <BrowserRouter>
      <Routes>

        {
          !loggedUser ?
            <>
              <Route path="/login" element={<><h1>dfghjgdsfhgsdd</h1></>} />
              {/* <Route path="/signin" element={<SignIn />} /> */}
              {/* <Route path="/password-reset" element={<PasswordReset />} /> */}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
            : <>

              <Route element={<Layout userRole="staff"> <Outlet /> </Layout>}>
                <Route path="/" element={<><h1>2222222222222222</h1></>} />
              </Route>

            </>
        }


      </Routes>
    </BrowserRouter>
  )
}