import { Navigate, useNavigate } from "react-router-dom";
import { useJwt } from "react-jwt";
import { useEffect } from "react";

const Protected = ({ auth,tok, children }) => {
  const { decodedToken, isExpired } = useJwt(tok);
  const navigate=useNavigate()
  useEffect(()=>{
    if(isExpired){
      navigate('/login')
    }
  },[])
  if (!tok) {
    return <Navigate to='/login' replace />;
  }
  return children;
};
export default Protected;

