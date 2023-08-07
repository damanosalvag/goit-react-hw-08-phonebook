import { Routes, Route, Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { operations } from "./app/contacts/operations";
import Contacts from "./pages/Contacts";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getContacts());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mt: 2 }}
      >
        Phonebook
      </Typography>
      <Routes>
        <Route
          path="/goit-react-hw-08-phonebook/"
          element={
            <>
              <Link
                to="/goit-react-hw-08-phonebook/contacts"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  gutterBottom
                  align="center"
                >
                  Find your contacts here
                </Typography>
              </Link>
              <Outlet />
            </>
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
      </Routes>
    </Container>
  );
}

export default App;
