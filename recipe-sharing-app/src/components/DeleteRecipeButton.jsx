import { useRecipeStore } from "./recipeStore";
export default function DeleteRecipeButton({ recipeId }) {
  const deleteButton = useRecipeStore((state) => state.DeleteRecipe);

  function handleRecipeButton(e) {
    deleteButton(recipeId);
  }
  return <button onClick={handleRecipeButton}>Delete</button>;
}
