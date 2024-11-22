import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './navbar.css'; // Import the custom CSS

function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">Home</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {/* Standard Nav Items for large screens */}
          <NavItem>
            <Link to="/About" className="nav-link">
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Projects" className="nav-link">
              Projects
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Resume" className="nav-link">
              Resume
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </NavItem>

          {/* Dropdown for small screens */}
          <NavItem className="d-block d-md-none">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>Menu</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <Link to="/About" className="dropdown-item">
                    About
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Projects" className="dropdown-item">
                    Projects
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Resume" className="dropdown-item">
                    Resume
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/Contact" className="dropdown-item">
                    Contact
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default ResponsiveNavbar;