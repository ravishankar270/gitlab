import { Navigate } from "react-router-dom";

const Protected = ({tok, children }) => {
  if (!tok) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default Protected;
