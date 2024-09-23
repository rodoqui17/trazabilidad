import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
function Navigation({ user, onLogout }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
        <Nav.Link href="#image">
              {user.photoURL ? (
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
            {" "}
            {/* Usar ms-auto para alinear a la derecha */}
            <Nav.Link href="#profile">
              {user.displayName} {/* Mostrar el nombre del usuario */}
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
}

export default Navigation;
