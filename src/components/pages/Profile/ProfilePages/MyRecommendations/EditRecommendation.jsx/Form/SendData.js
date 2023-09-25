import {
  errorMessage,
  successMessage,
} from "../../../../../../utilities/toastMessages/ToastMessages";

export default async function sendDataForm(
  idRecommendation,
  idUser,
  title,
  description,
  img,
  synopsis,
  category,
  author,
  slug,
  setTitle,
  setDescription,
  setImg,
  setSynopsis,
  setCategory,
  setAuthor,
  setSlug
) {
  try {
    const body = { title, description, img, synopsis, category, author, slug };
    const response = await sendData(idRecommendation, idUser, body);
    if (response.ok) {
      successMessage("Recomendação alterada com sucesso!");
      setTitle("");
      setDescription("");
      setImg("");
      setSynopsis("");
      setCategory("");
      setAuthor("");
      setSlug("");
      setTimeout(() => {
        window.location.href = "http://localhost:3000/my-recommendations";
      }, 2000);
    } else {
      errorMessage("Não foi possível alterar a recomendação!");
    }
  } catch (err) {
    console.log(err);
  }
}

const sendData = async (idRecommendation, idUser, body = {}) => {
  try {
    const response = await fetch(
      `http://localhost:8081/posts/edit/${idRecommendation}/${idUser}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
