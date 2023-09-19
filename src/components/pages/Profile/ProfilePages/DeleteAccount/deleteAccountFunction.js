import {
  errorMessage,
  successMessage,
} from "../../../../utilities/toastMessages/ToastMessages";

// Função para tratar os dados e enviar os dados como parâmetro para a funcão sendData que é responsável por fazer a conexão com a api

export default async function sendDataForm(
  password,
  setPassword,
  functionContext
) {
  if (!password) {
    errorMessage("Os campos não podem ficar vazios!");
    return;
  }
  try {
    // Pegando o id de usuário localizado no localStorage com a chave username
    const id = localStorage.getItem("username");
    const body = { id: id, password };
    const response = await sendData(body);

    if (response.ok) {
      successMessage("Conta deletada com sucesso!");
      setPassword("");
      setTimeout(() => {
        // Caso a response for ok, será executada a funcão que será passada como parâmetro, vindo diretamente do Context AuthContext. Neste caso seria a função de logout
        functionContext();
      }, 2000);
    }
  } catch (err) {
    console.log(err);
  }
}

async function sendData(body) {
  // Enviando o body para a rota post da api para uma conta ser deletada
  try {
    const response = await fetch("http://localhost:8081/return/user/del", {
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
}
