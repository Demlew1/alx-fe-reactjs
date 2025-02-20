import { useContext } from "react";
import myContext from "./UserContext";
export default function UserProfile() {
  const { userData } = useContext(myContext);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age:{userData.age}</p>
      <p>Bio:{userData.bio}</p>
    </div>
  );
}
