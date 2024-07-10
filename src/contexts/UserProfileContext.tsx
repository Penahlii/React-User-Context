import React, { ReactNode, createContext, useState, useContext } from "react";
import { UserProfile } from "../types/userProfileTypes";

type UserProfileContextType = {
  userProfile: UserProfile;
  updateUserProfile: (profile: UserProfile) => void;
};

const UserProfileContext = createContext<UserProfileContextType | undefined>(
  undefined
);

export const useUserProfileContext = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error(
      "useUserProfileContext must be used within a UserProfileProvider"
    );
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const UserProfileProvider: React.FC<Props> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: "",
    email: "",
    address: "",
  });

  const updateUserProfile = (profile: UserProfile) => {
    setUserProfile(profile);
  };

  return (
    <UserProfileContext.Provider value={{ userProfile, updateUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};
