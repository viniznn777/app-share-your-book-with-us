import {
  errorMessage,
  successMessage,
} from "../../../../utilities/toastMessages/ToastMessages";

export default async function SendFormDataEmail(newEmail, setNewEmail) {
  // Validação de formulário
  if (!newEmail) {
    errorMessage("Os campos não podem ficar vazios!");
    return;
  }

  try {
    // Pegando o id de usuário no localStorage com a chave username
    const idUser = localStorage.getItem("username");
    const body = { newEmail, id: idUser };

    const response = await sendData(body);

    if (response.ok) {
      successMessage("Email alterado com sucesso!");
      // Limpando o campo email para que seja atualizado no useEffect e o usuário poder ver a atualização de seu email sem ter que atualizar a página
      setNewEmail("");
    }
  } catch (err) {
    console.error(err);
  }
}

async function sendData(body) {
  try {
    const response = await fetch(
      "http://localhost:8081/return/user/redefine-email",
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
}
