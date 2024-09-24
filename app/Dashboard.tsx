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
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Bienvenido, {user?.displayName || 'Usuario'}</h1>
        <p className="text-gray-600 mb-4">Tu correo electrónico: {user?.email}</p>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onLogout}
        >
          Cerrar sesión
        </button>
        <TrazabilidadMinerales />
      </div>
    </div>
  );
};

export default UserPanel;
