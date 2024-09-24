import React from "react";
import { User } from "firebase/auth"; // Import User type from Firebase
import Navigation from "./Navbar";
import TrazabilidadMinerales from "./components/panel";

// Define types for the props
interface UserPanelProps {
  user: User | null; // user can be a Firebase User or null
  onLogout: () => void; // onLogout is a function with no arguments that returns void
}

const UserPanel: React.FC<UserPanelProps> = ({ user, onLogout }) => {
  return (
    <div>
      <Navigation user={user} onLogout={onLogout} />
      <div className="p-4">
        <TrazabilidadMinerales />
      </div>
    </div>
  );
};

export default UserPanel;
