import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { NavLink  } from "react-router-dom";
function Header() {
  const [togglemenu,settoggle]=useState(false)
  const funtogglemenu =()=>{
    settoggle((Prev)=>!Prev)
  }
  return (
    <section className="header-section">
      <Container>
        <Row>
          <Navbar expand="lg" className="bg-body-tertiary mb-3">
            <Navbar.Brand href="#">
              <NavLink className="nav-link" to="/Footer">weekendmonks</NavLink>
         </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
              show={togglemenu}
            >

              <Offcanvas.Header>
                <h1 className="logo">weekendmonks</h1>
                <span className="navbar-toggler ms-auto" onClick={funtogglemenu}>
                  <i className="bi bi-x-lg"></i>
                </span>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to= "/">Home</NavLink>
               <NavLink className="nav-link" to="/">About us</NavLink>
               <NavLink className="nav-link" to="/">Tours</NavLink>
               <NavDropdown
                    title="Destination"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Morroco tour</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      spain tour
                    </NavDropdown.Item>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item href="#action5">
                        france tour
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavLink className="nav-link" to="/">Galery</NavLink>
               <NavLink className="nav-link" to="/">Contact</NavLink>
             </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="ms-md-4 ms-2">
                      <NavLink className="primary-btn d-none d-sm-inline-block" to="/">book now</NavLink>
                      <li className="d-inline-block d-lg-none ms-3  toggle_btn">
                          <i className="bi bi-list" onClick={funtogglemenu}></i>
                      </li>
            </div>
          </Navbar>
        </Row>
      </Container>
    </section>
  );
}
export default Header;
