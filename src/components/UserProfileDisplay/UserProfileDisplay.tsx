import React from "react";
import { useUserProfileContext } from "../../contexts/UserProfileContext";
import { UserProfileContainer } from "./UserProfileDisplay.styles";

const UserProfileDisplay: React.FC = () => {
  const { userProfile } = useUserProfileContext();

  return (
    <UserProfileContainer>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p>
        <strong>Address:</strong> {userProfile.address}
      </p>
    </UserProfileContainer>
  );
};

export default UserProfileDisplay;
