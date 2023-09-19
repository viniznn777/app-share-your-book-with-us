import {
  alertMessage,
  errorMessage,
  successMessage,
} from "../../../../utilities/toastMessages/ToastMessages";

// Função para redefinir a senha
export default async function SendDataForm(
  oldPassword,
  newPassword,
  newPassword2
) {
  // validação de formulário
  if (!oldPassword || !newPassword || !newPassword2) {
    errorMessage("Os campos não podem ficar vazios!");
    return;
  }
  // validação para caso as senhas não coincidem
  if (newPassword !== newPassword2) {
    alertMessage("As senhas não coincidem!");
    return;
  }

  try {
    // Pegando o id de usuário no localStorage com a chave username
    const idUser = localStorage.getItem("username");
    const body = { oldPassword, newPassword, id: idUser };

    const response = await sendData(body);

    if (response.ok) {
      successMessage("Senha alterada com sucesso!");
    }
  } catch (err) {
    console.error(err);
  }
}

async function sendData(body) {
  try {
    const response = await fetch(
      "http://localhost:8081/return/user/redefine-password",
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
