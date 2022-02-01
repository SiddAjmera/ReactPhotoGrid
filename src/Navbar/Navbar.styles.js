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

export const NavIcon = styled.a``;

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
`;

export const NavFormSelectList = styled.div`
  button {
    width: 400px;
    height: 50px;
    padding: 15px;
    border-radius: 4px;
    border-color: transparent;
  }

  div {
    display: flex;
    flex-direction: column;
    a {
      width: 400px;
      height: 50px;
      padding: 15px;
      border-radius: 4px;
      border-color: transparent;
    }
  }
`;

export const Menu = styled.ul`
  /* main UL component called: "Menu" */
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;

  /* main LI */
  & > li {
    float: left;

    & > a {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;

      &:hover {
        background-color: red;
      }
    }
  }

  /* dropdown LI */
  & > .dropdown {
    display: inline-block;

    & > .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
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
          background-color: #f1f1f1;
        }
      }
    }

    &:hover .dropdown-content {
      display: block
    }
  }
`;

export const NavFormButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 25px;
  border: none;
  background: #2A2A8D;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;
