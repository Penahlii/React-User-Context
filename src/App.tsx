import React from "react";
import UserProfileDisplay from "./components/UserProfileDisplay/UserProfileDisplay";
import EditUserProfileForm from "./components/EditUserProfileForm/EditUserProfileForm";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <UserProfileDisplay />
      <EditUserProfileForm />
    </div>
  );
};

export default App;
