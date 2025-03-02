import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  function handleRecipeButton(e) {
    e.preventDefault();
    deleteRecipe(recipeId);
    if (onDelete) {
      onDelete();
    } else {
      navigate("/");
    }
  }

  return <button onClick={handleRecipeButton}>Delete</button>;
}
