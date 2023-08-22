import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { useContext } from "react";

export const SignUpGuard = () => {
  const {user} = useContext(UserContext);

  if (Object.values(user) != 0) {
    return <Navigate to="/dashboard" replace/>
  }
  return <Outlet />
};
