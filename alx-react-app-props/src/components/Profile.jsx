import UserInfo from "./UserInfo";
import { useContext } from "react";
import { myContext } from "../UserContext";

function ProfilePage() {
  const { userData } = useContext(myContext);
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
