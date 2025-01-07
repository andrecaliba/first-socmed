import { Outlet, Navigate } from 'react-router';
import { useState, useEffect } from 'react';

const ProtectedRoutes = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch("http://localhost:3000/api/check-auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
      const data = await response.json();
      console.log("In protected routes:", data.authenticated)
      setLoggedIn(data.authenticated);
    }
    checkAuth();
  }, [])
  if(loggedIn === null) {
    return (
      <h1>Loading...</h1>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;