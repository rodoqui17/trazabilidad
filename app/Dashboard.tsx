// UserPanel.js
import React from "react";
import { Button } from "react-bootstrap";
import Navigation from "./Navbar";
import TrazabilidadMinerales from "./components/panel";
const UserPanel = ({ user, onLogout }) => {
  return (
    <div>
      <Navigation user={user} onLogout={onLogout} />
      <div className="">
        {/* <h1 className="text-3xl font-bold text-gray-900 mb-4">Bienvenido, {user.displayName}</h1> */}
        {/* <p className="text-gray-600 mb-4">Tu correo electrónico: {user.email}</p> */}
        {/* <Button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onLogout}
        >
          Cerrar sesión
        </Button> */}
        <TrazabilidadMinerales />
      </div>
    </div>
  );
};

export default UserPanel;
