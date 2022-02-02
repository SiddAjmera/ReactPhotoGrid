import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';

import {
  AvatarImage,
  PhotoGridContainer,
  PhotographerMetadata,
  PhotographerNameAndDetails,
  Modal,
  ModalContent,
  LocationDetails,
  ImageMetadata,
} from './PhotoGrid.styles';

export default function PhotoGrid({ photos }) {
  const [currentImage, setCurrentImage] = useState();
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(photo);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PhotoGridContainer>
      <Gallery
        photos={photos}
        direction={'column'}
        margin={10}
        onClick={openLightbox}
      />
      <Modal
        style={{
          display: viewerIsOpen ? 'block' : 'none',
        }}
        onClick={closeLightbox}
      >
        {currentImage && (
          <ModalContent
            onClick={(event) => {
              // TODO: Check if Clicking on handle should navigate the user.
              event.preventDefault();
              event.stopPropagation();
            }}
          >
            <img src={currentImage.source} />
            <ImageMetadata>
              <PhotographerMetadata>
                {/* TODO: Make this Avatar Image Dynamic */}
                <AvatarImage
                  src={
                    'https://images.pexels.com/users/avatars/2570462/antoni-shkraba-576.jpeg?auto=compress&fit=crop&h=256&w=256'
                  }
                />
                <PhotographerNameAndDetails>
                  <h3>{currentImage.photographer}</h3>
                  <a href={currentImage.photographer_url} target="_blank">
                    {currentImage.photographer_url.split('/').pop()}
                  </a>
                </PhotographerNameAndDetails>
              </PhotographerMetadata>
              <LocationDetails>
                📍 Toronto Islands, Toronto, Canada
              </LocationDetails>
            </ImageMetadata>
          </ModalContent>
        )}
      </Modal>
    </PhotoGridContainer>
  );
}
