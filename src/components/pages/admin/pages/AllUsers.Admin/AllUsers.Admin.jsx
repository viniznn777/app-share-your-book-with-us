import React, { useContext, useEffect, useState } from "react";
import ContainerAllUsers from "./Styles";
import { Context } from "../../../../contexts/AuthContext";
import Loader from "../../../../utilities/Loader/Loader";
import BackButton from "../../../../utilities/BackButton/BackButton";
import CardUser from "./CardUser/CardUser";

const ALL_USERS_ADMIN = () => {
  const { id } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:8081/admin/return/all_users/adm/${id}`
        );
        if (response.ok) {
          const dataResponse = await response.json();
          setData(dataResponse);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  return (
    <ContainerAllUsers className="container">
      <div>
        <hr />
        <p className="fs-1">Painel Usuários:</p>
        <hr />
      </div>
      <BackButton to={"/my-profile"} text={"Voltar"} />
      {loading ? (
        <div>
          <p className="fs-1">Carregando...</p>
          <Loader />
        </div>
      ) : data.length > 0 ? (
        data.map((item, index) => (
          <CardUser
            username={item.username}
            email={item.email}
            password={item.password}
            id={item._id}
            date={item.date}
            adm={item.adm}
            key={index}
          />
        ))
      ) : (
        <div>
          <p className="fs-1">Não há usuários registrados 🔎</p>
        </div>
      )}
    </ContainerAllUsers>
  );
};

export default ALL_USERS_ADMIN;
