import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const ProtectedRout = ({ children, msg, redirect }) => {
  const navigate = useNavigate();
  const [{ user }] = useContext(DataContext);

  useEffect(() => {
    if (!user) {
      // If user is not authenticated, redirect to sign-in page with message and redirect info
      navigate("/auth", { state: { msg, redirect } });
    }
  }, [user]);

  // Only return the children (protected content) if the user is authenticated
  return children;
};

export default ProtectedRout;
