import {
  errorMessage,
  successMessage,
} from "../../../../../utilities/toastMessages/ToastMessages";

// Tornar usuário administrador
export const becomeAdmin = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8081/admin/admin_position/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      successMessage("Este usuário agora é um administrador!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (err) {
    errorMessage("Não foi possível tornar este usuário administrador!");
    console.log(err);
  }
};

// Romover cargo de administrador
export const removeAdmin = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:8081/admin/admin_position/remove/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      successMessage("Este usuário agora é um usuário Padrão!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (err) {
    errorMessage(
      "Não foi possível remover o cargo de administrador deste usuário!"
    );
    console.log(err);
  }
};
