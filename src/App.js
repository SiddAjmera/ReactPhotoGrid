import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Loader } from './App.styles';
import Navbar from './Navbar/Navbar';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import './style.css';

export default function App() {
  const [query, setQuery] = useState('Torronto');
  const [collectionId, setCollectionId] = useState('Architecture');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const collections = [
    { id: 1, title: 'Airplanes' },
    { id: 2, title: 'Mountains' },
    { id: 3, title: 'Basketball' },
    { id: 4, title: 'Forest' },
    { id: 5, title: 'Halloween' },
  ];

  const getImages = async () => {
    setIsLoading(true);
    const searchQuery = `${query ? query + ' ' : ''}${collectionId || ''}`;
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
              source: photo.src.original,
              title: photo.alt,
            })),
          ]
        : [...photos, ...photosToSet];
    setPhotos(photosToSetOnState);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {/* <GlobalStyles /> */}
      <Navbar
        query={query}
        setQuery={setQuery}
        collectionId={collectionId}
        setCollectionId={setCollectionId}
        getImages={getImages}
        collections={collections}
      />
      {isLoading ? (
        <Loader src={'https://i.ibb.co/47vf2WV/Spinner-1s-200px.gif'} />
      ) : photos.length ? (
        <PhotoGrid photos={photos} />
      ) : null}
    </>
  );
}
