import {
  errorMessage,
  successMessage,
} from "../../utilities/toastMessages/ToastMessages";

export default async function sendDataForm(id) {
  try {
    if (!id) {
      errorMessage("Não foi possível deletar a categoria!");
      return;
    }
    const body = { id };
    const response = await sendData(body);
    if (response.ok) {
      successMessage("Categoria deletada com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
}

const sendData = async (body) => {
  try {
    const response = await fetch(
      "http://localhost:8081/categories/delete-one",
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
