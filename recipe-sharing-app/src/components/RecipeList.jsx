import { useRecipeStore } from "./recipeStore";
export default function RecipeList() {
  const recipes = useRecipeStore((state) => state.recipes);
  return (
    <div>
      {recipes.map((recipe) => (
        <div className="" key={recipe.id}>
          <h3 className="font-bold text-gray-700 capitalize mb-0.5">
            {recipe.title}
          </h3>
          <p className="text-gray-500">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
