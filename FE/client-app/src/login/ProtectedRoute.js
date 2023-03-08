import { Navigate } from "react-router-dom";
import { useAuthValue } from "../context/Authvalue";

const ProtectedRoute = ({ children, role }) => {
  const { currentUser } = useAuthValue();

  if (!currentUser?.emailVerified) {
    return <Navigate to="/Signin" replace />;
  }

  if (role === "admin" && currentUser.role !== "admin") {
    // user is not authorized to access admin route
    return <Navigate to="/" replace />;
  }

  if (role === "reviewer" && currentUser.role !== "reviewer") {
    // user is not authorized to access reviewer route
    return <Navigate to="/" replace />;
  }

  if (role === "applicant" && currentUser.role !== "applicant") {
    // user is not authorized to access applicant route
    return <Navigate to="/" replace />;
  }

  // user is authorized to access route
  return children;
};

export default ProtectedRoute;
