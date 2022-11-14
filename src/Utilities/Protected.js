import { Navigate } from "react-router-dom";
const Protected = ({ auth,tok, children }) => {
  if (!auth || !tok) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default Protected;

