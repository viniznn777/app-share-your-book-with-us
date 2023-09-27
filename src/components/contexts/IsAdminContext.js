import React, { createContext, useState, useEffect, useContext } from "react";
import { Context } from "./AuthContext";

const ContextAdmin = createContext();

function IsAdminProvider({ children }) {
  const { id } = useContext(Context);
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:8081/return/user/${id}/a_d_m/verify`
        );
        if (response.ok) {
          const dataResponse = await response.json();
          setIsAdmin(dataResponse.isAdmin);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  return (
    <ContextAdmin.Provider value={{ isAdmin }}>
      {children}
    </ContextAdmin.Provider>
  );
}

export { ContextAdmin, IsAdminProvider };
