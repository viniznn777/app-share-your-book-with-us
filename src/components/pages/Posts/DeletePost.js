import { successMessage } from "../../utilities/toastMessages/ToastMessages";

export default async function DeletePost(idRecommendation) {
  try {
    const response = await fetch(
      `http://localhost:8081/posts/delete-one/${idRecommendation}`
    );

    if (response.ok) {
      successMessage("Postagem deletada com sucesso!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  } catch (err) {
    console.log(err);
  }
}
