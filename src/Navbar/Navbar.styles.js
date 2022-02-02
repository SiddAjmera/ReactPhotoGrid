import styled from 'styled-components';

export const Nav = styled.nav` 
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  padding: 10px 20px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const NavIcon = styled.a`
  img {
    width: 70px;
    margin-right: 20px;
  }
`;

export const NavForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavFormInput = styled.input`
  width: 400px;
  height: 50px;
  padding: 15px;
  border-radius: 4px;
  border-color: transparent;
  margin-right: 20px;

  &:focus{
    outline: none;
  }
`;

export const Menu = styled.ul`
  /* main UL component called: "Menu" */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  margin-right: 20px;
  border-radius: 4px;
  -webkit-box-shadow: 0px 20px 0px -10px grey; 
  box-shadow: 0px 20px 0px -10px grey;

  /* main LI */
  & > li {
    float: left;

    & > a {
      width: 400px;
      height: 50px;
      display: inline-block;
      background: #FFFFFF;
      color: #000000;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;

      &:hover {
        background-color: #F3F3F7;
      }
    }
  }

  /* dropdown LI */
  & > .dropdown {
    display: inline-block;

    & > .dropdown-content {
      display: none;
      position: absolute;
      background-color: #FFFFFF;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;

      & > a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        &:hover {
          background-color: #FFFFFF;
        }
      }
    }

    &:hover .dropdown-content {
      display: block
    }
  }
`;

export const NavFormButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: #2A2A8D;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;
