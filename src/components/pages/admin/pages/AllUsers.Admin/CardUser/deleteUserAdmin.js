import {
  errorMessage,
  successMessage,
} from "../../../../../utilities/toastMessages/ToastMessages";

export const deleteUserAdmin = async (id) => {
  const url = `http://localhost:8081/admin/users/del/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      successMessage("Usuário deletado com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (err) {
    console.error("Erro ao excluir usuário", err);
    errorMessage("Não foi possível deletar usuário!");
  }
};
