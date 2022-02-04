import styled from 'styled-components';

export const PhotoGridContainer = styled.div` 
  margin: 175px 100px;
`;

export const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0,0,0,0.8); /* Black w/ opacity */
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 10px;

  img {
    max-height: 100vh;
    object-fit: cover;
  }
`;

export const PhotographerMetadata = styled.div`
  display: flex;
  align-items: center;
`;

export const AvatarImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const PhotographerNameAndDetails = styled.div`
  a {
    font-weight: bold;
    text-decoration: none;
  }
`;

export const LocationDetails = styled.span`

`;

export const ImageMetadata = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
