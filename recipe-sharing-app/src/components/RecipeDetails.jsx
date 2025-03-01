import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
export default function RecipeDetails({ recipeId }) {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  if (!recipe) return <p className="text-red-500">Recipe not found</p>;
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
}
