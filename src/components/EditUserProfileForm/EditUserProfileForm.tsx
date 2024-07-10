import React, { useState } from "react";
import { useUserProfileContext } from "../../contexts/UserProfileContext";
import { UserProfile } from "../../types/userProfileTypes";
import {
  EditUserProfileFormContainer,
  Input,
  Button,
} from "./EditUserProfileForm.styles";

const EditUserProfileForm: React.FC = () => {
  const { userProfile, updateUserProfile } = useUserProfileContext();
  const [profile, setProfile] = useState<UserProfile>(userProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUserProfile(profile);
  };

  return (
    <EditUserProfileFormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <Input
        type="email"
        name="email"
        value={profile.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Input
        type="text"
        name="address"
        value={profile.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <Button type="submit">Update Profile</Button>
    </EditUserProfileFormContainer>
  );
};

export default EditUserProfileForm;
