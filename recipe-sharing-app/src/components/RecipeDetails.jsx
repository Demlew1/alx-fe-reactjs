import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(recipeId))
  );

  if (!recipe) return <p className="text-red-500">Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate("/")} />
    </div>
  );
}
