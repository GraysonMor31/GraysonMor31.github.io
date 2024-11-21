import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
            <NavLink href="/About">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Projects">Projects</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Resume">Resume</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contact">Contact</NavLink>
          </NavItem>

          {/* Dropdown for small screens */}
          <NavItem className="d-block d-md-none">
            <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
              <DropdownToggle caret>Menu</DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/about">About</DropdownItem>
                <DropdownItem href="/projects">Projects</DropdownItem>
                <DropdownItem href="/resume">Resume</DropdownItem>
                <DropdownItem href="/contact">Contact</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default ResponsiveNavbar;
