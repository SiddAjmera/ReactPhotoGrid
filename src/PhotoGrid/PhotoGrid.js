import React from 'react';
import Gallery from 'react-photo-gallery';

import { PhotoGridContainer } from './PhotoGrid.styles';

export default function PhotoGrid({ photos }) {
  return (
    <PhotoGridContainer>
      <Gallery photos={photos} direction={'column'} margin={10} />
    </PhotoGridContainer>
  );
}
