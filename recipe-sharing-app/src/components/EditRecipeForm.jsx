import { useState } from "react";
import { useRecipeStore } from "./recipeStore";

export default function EditRecipeForm({ recipe }) {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  function handleSubmit(event) {
    event.preventDefault();
    if (!title || !description) {
      alert("Title and description cannot be empty");
      return;
    }
    updateRecipe({ id: recipe.id, title, description });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="border-1 border-gray-300 inline-block p-2 rounded-md text-center"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border-gray-200 border-1 rounded-md p-8"
      />
      <button
        type="submit"
        className="bg-green-600 p-2 font-bold text-gray-100 rounded-lg hover:bg-green-200 hover:text-gray-600"
      >
        Update
      </button>
    </form>
  );
}
