// Header.jsx
import { useEffect, useState } from "react";
import { Container, Row, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";

function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle Offcanvas
  const toggleOffcanvas = () => setShowOffcanvas(prev => !prev);
  // Sticky header logic
  const handleScroll = () => setIsSticky(window.scrollY >= 120);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
   
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header-section ${isSticky ? "is-sticky" : ""}`}>
      <Container>
        <Row>
          <Navbar expand="lg" className="mb-3">
            {/* Logo */}
            <Navbar.Brand>
              <NavLink className="nav-link p-0" to="/">
                weekendmonks
              </NavLink>
            </Navbar.Brand>

            {/* Toggle Offcanvas for small screens */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
            {/* Offcanvas menu */}
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              show={showOffcanvas}
              onHide={toggleOffcanvas}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel" className="logo">
                  weekendmonks
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                  <NavLink className="nav-link" to="/about">About us</NavLink>
                  <NavLink className="nav-link" to="/tours">Tours</NavLink>

                  <NavDropdown title="Destination" id="offcanvasNavbarDropdown">
                    <NavDropdown.Item href="#morocco">Morocco tour</NavDropdown.Item>
                    <NavDropdown.Item href="#spain">Spain tour</NavDropdown.Item>
                    <NavDropdown.Item href="#france">France tour</NavDropdown.Item>
                  </NavDropdown>

                  <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                  <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* Book Now & mobile toggle */}
            <div className="ms-md-4 ms-2 d-flex align-items-center">
              <NavLink className="primary-btn d-none d-sm-inline-block" to="/book">
                Book Now
              </NavLink>

              <button
                className="d-inline-block d-lg-none ms-3 toggle_btn btn btn-link"
                onClick={toggleOffcanvas}
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list" />
              </button>
            </div>
          </Navbar>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
