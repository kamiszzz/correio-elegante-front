import { useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";

import { AppContext, LoggedUserContext } from "./contexts";
import { Layout, AppLoadingProgress, Snackbar } from "./components";

export function App() {
  const { loadingApp } = useContext(AppContext);
  const { loggedUser } = useContext(LoggedUserContext);

  if (loadingApp) return <AppLoadingProgress />;
  else
    return (
      <>
      <BrowserRouter>
        <Routes>
          {!loggedUser ? (
            <>
              <Route
                path="/login"
                element={
                  <>
                    <h1>dfghjgdsfhgsdd</h1>
                  </>
                }
              />
              {/* <Route path="/signin" element={<SignIn />} /> */}
              {/* <Route path="/password-reset" element={<PasswordReset />} /> */}
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route
                element={
                  <Layout userRole="staff">
                    {" "}
                    <Outlet />{" "}
                  </Layout>
                }
              >
                <Route
                  path="/"
                  element={
                    <>
                      <h1>2222222222222222</h1>
                    </>
                  }
                />
              </Route>
            </>
          )}

         
        </Routes>
      </BrowserRouter>
       <Snackbar />
       </>
    );
}
