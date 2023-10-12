import React, { useState, useEffect } from "react";
import ContainerEdit from "./Styles";
import { useParams } from "react-router-dom";
import ValidateURLData from "./ValidationEdit";
import FormEdit from "./Form/FormEdit";

import Loader from "../../../../../utilities/Loader/Loader";

const EditRecommendation = () => {
  const { id, user } = useParams();
  const [ok, setOk] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Chamando a função onLoad para que use a funcão ValidateURLData para fazer a validação se os valores passados na url são válidos, caso não sejam, o formulário de edição não será carregado, e será mostrado uma mensagem dizendo que não foi possível carregar a página, pedindo para que verifique a url
    async function onLoad() {
      setIsLoading(true);
      try {
        const response = await ValidateURLData(id, user);
        if (response.ok) {
          setOk(true);
          setIsLoading(false);
        } else {
          setOk(false);
        }
      } catch (err) {
        console.log(err);
        setOk(false);
      } finally {
        setIsLoading(false);
      }
    }
    document.title = "AppBooks | Editar";
    onLoad();
  }, [id, user]);

  return (
    <ContainerEdit className="container">
      {isLoading ? (
        <Loader />
      ) : ok ? (
        <FormEdit />
      ) : (
        <div>
          <p className="fs-1 mt-4">Rota de edição não encontrada :(</p>
          <br />
          <p className="fs-5">Verifique sua URL e tente novamante!</p>
        </div>
      )}
    </ContainerEdit>
  );
};

export default EditRecommendation;
