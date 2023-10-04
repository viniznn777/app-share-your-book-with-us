import {
  errorMessage,
  successMessage,
} from "../../../../../../utilities/toastMessages/ToastMessages";

export default async function sendDataForm(
  name,
  slug,
  description,
  img,
  restrictModel,
  id
) {
  try {
    if (!name || !slug || !description || !img) {
      errorMessage("Os campos não podem ficar vazios!");
      return;
    }
    const body = { id, name, slug, description, restrictModel, img };
    const response = await sendData(body);
    if (response.ok) {
      successMessage("Categoria editada com sucesso!");
      setTimeout(() => {
        window.location.href =
          "http://localhost:3000/admin/categories/edit-delete";
      }, 1000);
    }
  } catch (err) {
    errorMessage("Não foi possível editar a categoria!");
    console.log(err);
  }
}

const sendData = async (body) => {
  try {
    const response = await fetch("http://localhost:8081/categories/edit", {
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
