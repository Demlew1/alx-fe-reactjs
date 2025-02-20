import ProfilePage from "./components/ProfilePage";
import myContext from "./components/UserContext";
import UserProfile from "./components/UserProfile";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <myContext.Provider value={{ userData }}>
      <ProfilePage />
      <UserProfile />
    </myContext.Provider>
  );
}

export default App;
