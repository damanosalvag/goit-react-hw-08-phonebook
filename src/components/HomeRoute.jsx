import { Navigate } from "react-router-dom";

export const HomeRoute = ({ redirectTo = "/" }) => {



  return <Navigate to={redirectTo} /> ;
};
