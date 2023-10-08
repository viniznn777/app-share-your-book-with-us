import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  alertMessage,
  errorMessage,
} from "../utilities/toastMessages/ToastMessages";
import Loader from "../utilities/Loader/Loader";

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [nameUser, setNameUser] = useState("");
  const navigate = useNavigate();

  // effect para ver se há um token de autenticação no localStorage, caso não haja, o state de authenticated será passado como false para que o usuário não consiga acessar rotas privadas
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuthenticated(true);
    }

    setLoadingUser(false);
  }, []);

  // Função para realizar o cadastro de um usuário no app
  const handleSignUp = async (event, username, email, password) => {
    event.preventDefault();
    if (!username || !email || !password) {
      alertMessage("Os campos não podem ficar vazios!");
      return;
    }
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

  // Funcão para realizar o login do usuário
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
        // Armazene o token JWT no localStorage
        localStorage.setItem("token", JSON.stringify(responseData.token));
        // Armazene o id de usuário em uma chave 'username' no localStorage
        localStorage.setItem("username", responseData.user);
        setAuthenticated(true);
        // Redirecione o usuário após o login
        navigate("/");
      } else if (response.status === 400) {
        errorMessage("Email ou Senha incorretos!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Função para realizar o logout do usuário
  const handleLogout = () => {
    // setando o Autheticated como false para que o usuário não esteja mais autenticado
    setAuthenticated(false);
    // removendo o token de autenticação e o id do usuário do localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    // redirecionando para a página de login
    navigate("/signin");
  };

  // Effect para ser carregado toda vez em que o usuário está autenticado, para ser mostrado seu nome de usuário na barra de navegação do app
  useEffect(() => {
    // Verifica se o usuário está autenticado
    if (authenticated) {
      (async () => {
        try {
          // Buscando o valor da chave 'username' setada no localStorage
          const localStorageUserId = localStorage.getItem("username");
          if (localStorageUserId) {
            // Caso exista uma chave e um valor, será passado como parâmetro na url da api para buscar o nome de usuário do usuário.
            const response = await fetch(
              `http://localhost:8081/return/user/${localStorageUserId}`
            );
            if (response.ok) {
              // Esperando uma resposta em JSON e armazenando-a na variavel 'responseData'
              const responseData = await response.json();
              // passando o valor de 'responseData.username' para o state "setNameUser", no qual é o valor do nome de usuário do usuário
              setNameUser(responseData.username);
            }
          }
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [authenticated]);

  const id = localStorage.getItem("username");

  if (loadingUser) {
    return <Loader />;
  }
  if (authenticated && !nameUser) {
    return (
      <p className="fs-5" style={{ color: "#fff" }}>
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
        nameUser,
        id,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
