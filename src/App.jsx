import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { operations as contactsOperations } from "./app/contacts/operations";
import { operations as authOperations } from "./app/auth/operations";
import Contacts from "./pages/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { Landing } from "./pages/Landing";

function App() {
  const token = useSelector((state) => state.auth.token);
  const [home, setHome] = useState(true);
  const dispatch = useDispatch();
  const handleHome = (value) => {
    setHome(value);
  };
  useEffect(() => {
    dispatch(contactsOperations.getContacts(token));
    dispatch(authOperations.currentUser());
  }, [dispatch, token]);

  return (
    <Box>
      <Container maxWidth="sm">
        <Routes>
          <Route
            path="/goit-react-hw-08-phonebook/"
            element={
              home ? (
                <Navigate to="/goit-react-hw-08-phonebook/home" replace />
              ) : (
                <Outlet />
              )
            }
          >
            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/login"
                  component={<Register />}
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  redirectTo="/goit-react-hw-08-phonebook/contacts"
                  component={<Login />}
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  redirectTo="/goit-react-hw-08-phonebook/login"
                  component={<Contacts />}
                />
              }
            />
          </Route>
          <Route
            path="/goit-react-hw-08-phonebook/home"
            element={<Landing home={handleHome} />}
          />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
