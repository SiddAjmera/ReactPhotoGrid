import React from 'react';
import {
  Nav,
  NavIcon,
  NavForm,
  NavFormInput,
  NavFormButton,
  NavFormDropdown,
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
        <NavFormDropdown>
          <p
            className="dropbtn"
            onClick={() => {
              const dropdownMenu = document.getElementById('dropdownMenu');
              console.log('**** dropdownMenu: ', dropdownMenu);
              dropdownMenu.style.display = 'block';
            }}
          >
            {collection || 'Collections'}
          </p>
          {/* <span className="border"></span> */}
          <ul id="dropdownMenu" className="dropdown-content">
            {collections.map((collectionItem) => (
              <li
                key={collectionItem}
                onClick={() => {
                  setCollection(collectionItem);
                  const dropdownMenu = document.getElementById('dropdownMenu');
                  dropdownMenu.style.display = 'none';
                }}
              >
                {collectionItem}
              </li>
            ))}
          </ul>
        </NavFormDropdown>
        <NavFormButton onClick={() => getImages()} type="button">
          Search
        </NavFormButton>
      </NavForm>
    </Nav>
  );
}
