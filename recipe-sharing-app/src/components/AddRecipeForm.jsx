import { useState } from "react";
import { useRecipeStore } from "./recipeStore";
export default function AddRecipeForm() {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeHolder="Enter Your Title"
        className="border-1 border-gray-300 inline-block p-2 rounded-md text-center"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border-gray-200 border-1 rounded-md p-8 "
      />
      <button
        className="bg-amber-600 p-2 font-bold text-gray-100 rounded-lg hover:bg-amber-200 hover:text-gray-600"
        type="submit"
      >
        Add Recipe
      </button>
    </form>
  );
}
