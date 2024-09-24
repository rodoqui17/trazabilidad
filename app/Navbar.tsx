import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { User } from "firebase/auth"; // Import User type from Firebase

interface NavigationProps {
  user: User | null; // The user can be either a Firebase User or null
  onLogout: () => void; // Logout is a function that returns void
}

const Navigation: React.FC<NavigationProps> = ({ user, onLogout }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link href="#image">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt="User Avatar"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            ) : (
              <span>No Image</span>
            )}
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Use ms-auto to align to the right */}
            <Nav.Link href="#profile">
              {user?.displayName || "Usuario"} {/* Show user's name or fallback */}
            </Nav.Link>
        
            <NavDropdown title="Opciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Configuración
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3" onClick={onLogout}>
                Salir
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
