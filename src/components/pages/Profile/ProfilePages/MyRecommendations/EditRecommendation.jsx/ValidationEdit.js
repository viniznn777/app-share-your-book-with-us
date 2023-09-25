import { errorMessage } from "../../../../../utilities/toastMessages/ToastMessages";

// Validação para verificar se os dados passados na url são os mesmo que estão no banco de dados
export default async function ValidateURLData(idRecommendation, idUser) {
  try {
    const response = await fetch(
      `http://localhost:8081/posts/edit/${idRecommendation}/${idUser}`
    );

    if (!response.ok) {
      errorMessage(
        "Você não é o autor desta publicação, verifique a url e tente novamente"
      );
      console.log("Voce não é o autor da publicação");
    }
    return response;
  } catch (err) {
    console.log(err);
  }
}
