import { UserButton, currentUser } from "@clerk/nextjs";
import "./components.css";
import SaveUser from "./SaveUser";

const MemberProfile = async () => {
  const user = await currentUser();

  return (
    <div className="member-profile-container">
      <UserButton afterSignOutUrl="/" />
      <p>{user?.emailAddresses[0].emailAddress}</p>
      {user?.emailAddresses[0]?.emailAddress && (
        <SaveUser userEmail={user?.emailAddresses[0].emailAddress} />
      )}
    </div>
  );
};

export default MemberProfile;
