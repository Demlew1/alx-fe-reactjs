import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
function App() {
  return (
    <div className=" flex flex-row justify-center items-center h-screen gap-24 ">
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
