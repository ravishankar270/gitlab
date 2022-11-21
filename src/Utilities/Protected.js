import { Navigate } from "react-router-dom";

const Protected = ({tok, children }) => {
  //if token is not set user is redirected to login page
  if (!tok) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
