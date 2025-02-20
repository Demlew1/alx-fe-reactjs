import ProfilePage from "./components/ProfilePage";
import myContext from "./components/UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Loves hiking",
  };

  return (
    <myContext.Provider value={{ userData }}>
      <ProfilePage />
    </myContext.Provider>
  );
}

export default App;
