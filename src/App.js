import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GlobalStyles from './global.styles';
import { Loader } from './App.styles';
import Navbar from './Navbar/Navbar';
import NavbarBS from './Navbar/NavbarBS';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import { photos } from './photos';
import './style.css';

export default function App() {
  const [query, setQuery] = useState('Torronto');
  const [collection, setCollection] = useState('Architecture');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(30);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Check with Kutlu whether we need to call the API on click of the search button or on change of either the query or collection.

  // NOTE: ATM, we're calling the API on change of either Search Query or Collection. But it's not very efficient, especially in case of change in the query. But since he insisted on handling state management in useEffect, that's how the code has been implemented.
  const getImages = async () => {
    setIsLoading(true);
    const searchQuery = `${query ? query + ' ' : ''}${collection || ''}`;
    const {
      data: { photos: photosToSet },
    } = await axios(
      `https://api.pexels.com/v1/search?query=${searchQuery}&page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization:
            '563492ad6f917000010000014829f9a606fe4bf7bca08c74f4901930',
        },
      }
    );

    const photosToSetOnState =
      page === 1
        ? [
            ...photosToSet.map((photo) => ({
              ...photo,
              sources: { ...photo.src },
              src: photo.src.medium,
              source: photo.src.large,
              title: photo.alt,
            })),
          ]
        : [...photos, ...photosToSet];
    setPhotos(photosToSetOnState);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [query, collection]);

  return (
    <>
      <GlobalStyles />
      <Navbar
        query={query}
        setQuery={setQuery}
        collection={collection}
        setCollection={setCollection}
        getImages={getImages}
      />
      {isLoading ? (
        <Loader src={'https://i.ibb.co/47vf2WV/Spinner-1s-200px.gif'} />
      ) : photos.length ? (
        <PhotoGrid photos={photos} />
      ) : null}
    </>
  );
}
