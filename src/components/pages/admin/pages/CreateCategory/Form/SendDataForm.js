import {
  errorMessage,
  successMessage,
} from "../../../../../utilities/toastMessages/ToastMessages";

export const SendData = async (name, slug, restrictModel, description, img) => {
  try {
    if (!name || !slug || !restrictModel || !description || !img) {
      errorMessage("Os campos não podem ficar vazios!");
      return;
    }
    const body = { name, slug, restrictModel, description, img };
    const response = await SendDataForm(body);
    if (response.ok) {
      successMessage("Categoria Criada com sucesso!");

      setTimeout(() => {
        window.location.href = "http://localhost:3000/categories";
      }, 1000);
    }
  } catch (err) {
    console.log(err);
  }
};
const SendDataForm = async (body) => {
  try {
    const response = await fetch("http://localhost:8081/categories/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
