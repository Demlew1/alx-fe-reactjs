import { useRecipeStore } from "./recipeStore";

export default function DeleteRecipeButton({ recipeId, onDelete }) {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  function handleRecipeButton(e) {
    e.preventDefault();
    deleteRecipe(recipeId);
    if (onDelete) onDelete(); // Redirect after deletion
  }

  return <button onClick={handleRecipeButton}>Delete</button>;
}
