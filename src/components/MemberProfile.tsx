import { UserButton, currentUser } from "@clerk/nextjs";
import "./components.css";

const MemberProfile = async () => {
  const user = await currentUser();

  return (
    <div className="member-profile-container">
      <UserButton afterSignOutUrl="/" />
      <p>{user?.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
