import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

export default function RecipeList() {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const displayedRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div className="overflow-y-scroll p-8 h-100">
      {displayedRecipes.map((recipe) => (
        <div
          className="border-2 my-2 border-gray-300 p-2 rounded-md"
          key={recipe.id}
        >
          <h3 className="font-bold text-gray-700 capitalize mb-0.5">
            {recipe.title}
          </h3>
          <p className="text-gray-500 text-xs">{recipe.description}</p>
          <Link
            to={`/recipe/${recipe.id}`}
            className="text-xs bg-blue-700 text-white p-1 rounded-sm hover:bg-blue-600 mt-2"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
