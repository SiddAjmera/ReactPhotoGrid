import React, { useEffect, useState } from 'react';
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
  collections,
  collectionId,
  setCollectionId,
  getImages,
}) {
  const [collection, setCollection] = useState();

  useEffect(() => {
    const collectionToSet = collections.find(({ id }) => id === collectionId);
    collectionToSet && setCollection(collectionToSet);
  }, [collectionId]);

  return (
    <Nav>
      <NavIcon href="/">
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
              dropdownMenu.style.display = 'block';
            }}
          >
            <span
              style={{
                color: collection ? '#000000' : '#D5D7E5',
              }}
            >
              {collection ? collection.title : 'Collections'}
            </span>
          </p>
          <ul id="dropdownMenu" className="dropdown-content">
            {collections.map((collectionItem) => (
              <li
                key={collectionItem.title}
                onClick={() => {
                  setCollectionId(collectionItem.id);
                  const dropdownMenu = document.getElementById('dropdownMenu');
                  dropdownMenu.style.display = 'none';
                }}
              >
                {collectionItem.title}
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
