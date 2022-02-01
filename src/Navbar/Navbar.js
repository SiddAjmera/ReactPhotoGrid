import React from 'react';
import {
  Nav,
  NavIcon,
  NavForm,
  NavFormInput,
  Menu,
  NavFormButton,
} from './Navbar.styles';

export default function Navbar({ query, collection }) {
  return (
    <Nav>
      <NavIcon>Icon</NavIcon>
      <NavForm>
        <NavFormInput type="search" placeholder="Search" aria-label="Search" />
        <Menu>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Collections
            </a>
            <div className="dropdown-content">
              <a href="#">Featured</a>
              <a href="#">Wallpapers</a>
              <a href="#">Nature</a>
              <a href="#">Textures & Patters</a>
              <a href="#">Architecture</a>
            </div>
          </li>
        </Menu>
        <NavFormButton type="button">Search</NavFormButton>
      </NavForm>
    </Nav>
  );
}
