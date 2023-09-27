import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ContextAdmin } from "../contexts/IsAdminContext";
import { Context } from "../contexts/AuthContext";

function PrivateRouteAdmin({ item }) {
  const { isAdmin } = useContext(ContextAdmin);
  const { authenticated } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authenticated) {
      // Aguarde até que isAdmin seja definido
      if (isAdmin === null) {
        setLoading(true);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [authenticated, isAdmin]);

  if (loading) {
    // Renderizar uma tela de carregamento ou mensagem enquanto verifica isAdmin
    return (
      <div className="container">
        <p className="fs-1 fw-bold" style={{ paddingTop: "99px" }}>
          Verificando Permissões...
        </p>
      </div>
    );
  }
  // Verificando se o usuário não estiver autenticado, será redirecionado para a página de login.
  // Se o usuário estiver autenticado e for um administrador, será redirecionado para a página de destino do admin. Caso estiver autenticado mas não for um administrador, será redirecionado para uma página de acesso negado, onde mostrará uma mensagem dizendo que não tem permissão para acessar esta página.
  return !authenticated ? (
    <Navigate to="/signin" />
  ) : authenticated && isAdmin ? (
    item
  ) : (
    <Navigate to="/access_denied" />
  );
}
export { PrivateRouteAdmin };
