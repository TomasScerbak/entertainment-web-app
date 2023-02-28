import React, { useState, useEffect } from "react";
import app from "../base";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStageChange(setCurrentUser);
  }, []);

  return (
    <AuthProvider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthProvider>
  );
};
