import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  alertMessage,
  errorMessage,
} from "../utilities/toastMessages/ToastMessages";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoadingUser(false);
  }, []);

  const handleSignUp = async (event, username, email, password) => {
    event.preventDefault();
    try {
      const body = { username, email, password };
      const response = await fetch("http://localhost:8081/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 400) {
        errorMessage("Este email já está em uso!");
        return;
      }
      navigate("/signin");
    } catch (err) {
      console.error("Error in registration: ", err);
    }
  };

  const handleLogin = async (event, email, password) => {
    event.preventDefault();

    if (!email || !password) {
      alertMessage("Preencha todos os campos!");
      return;
    }

    try {
      const body = { email, password };
      // Faça uma solicitação POST para o servidor para fazer login
      const response = await fetch("http://localhost:8081/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Login bem-sucedido:", responseData);
        // Armazene o token JWT no localStorage
        localStorage.setItem("token", JSON.stringify(responseData.token));
        // Redirecione o usuário após o login
        setAuthenticated(true);
        navigate("/");
      } else if (response.status === 400) {
        errorMessage("Email ou Senha incorretos!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    navigate("/signin");
  };

  if (loadingUser) {
    return (
      <p className="fs-1" style={{ textAlign: "center" }}>
        loading...
      </p>
    );
  }

  return (
    <Context.Provider
      value={{
        authenticated,
        handleSignUp,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
