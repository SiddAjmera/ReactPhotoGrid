import React from 'react';
import {
  Nav,
  NavIcon,
  NavForm,
  NavFormInput,
  Menu,
  NavFormButton,
} from './Navbar.styles';

export default function Navbar({
  query,
  setQuery,
  collection,
  setCollection,
  getImages,
}) {
  const collections = [
    'Featured',
    'Wallpapers',
    'Nature',
    'Textures & Patters',
    'Architecture',
  ];

  return (
    <Nav>
      <NavIcon>
        <img
          src={
            'https://i.ibb.co/Q6917Cx/Screen-Shot-2022-02-02-at-11-15-51-am-removebg-preview.png'
          }
        />
      </NavIcon>
      <NavForm>
        <NavFormInput
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Menu>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              {collection || 'Collections'}
            </a>
            <div className="dropdown-content">
              {collections.map((collectionItem) => (
                <a
                  key={collectionItem}
                  onClick={() => setCollection(collectionItem)}
                  href="#"
                >
                  {collectionItem}
                </a>
              ))}
            </div>
          </li>
        </Menu>
        <NavFormButton onClick={() => getImages()} type="button">
          Search
        </NavFormButton>
      </NavForm>
    </Nav>
  );
}
