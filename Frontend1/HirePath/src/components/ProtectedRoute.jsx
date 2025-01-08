import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Here, you can also validate the token via an API request if needed
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally show a loading spinner
  }

  if (!authenticated) {
    return <Navigate to="/login" />; // Redirect to login page if not authenticated
  }

  return children; // Render the children if authenticated
};

export default ProtectedRoute;
