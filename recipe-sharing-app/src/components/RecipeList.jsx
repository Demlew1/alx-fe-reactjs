import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  console.log("Recipes in RecipeList:", recipes);

  return (
    <div className="overflow-y-scroll p-8 h-100">
      {recipes.map((recipe) => (
        <div
          className="border-2 my-2 border-gray-300 p-2 rounded-md"
          key={recipe.id}
        >
          <h3 className="font-bold text-gray-700 capitalize mb-0.5">
            {recipe.title}
          </h3>
          <p className="text-gray-500 text-xs">{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
