import React from 'react';

import GlobalStyles from './global.styles';
import Navbar from './Navbar/Navbar';
import NavbarBS from './Navbar/NavbarBS';
import PhotoGrid from './PhotoGrid/PhotoGrid';
import { photos } from './photos';
import './style.css';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      {photos.length && <PhotoGrid photos={photos} />}
    </>
  );
}
