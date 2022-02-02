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

export const NavFormDropdown = styled.div`
  width: 400px;
  height: 50px;
  align-items: center;
  verticle-align: center;
  border-radius: 4px;
  border-color: transparent;
  margin-right: 20px;
  background: white;
  cursor: pointer;
  -webkit-box-shadow: 0px 20px 0px -10px #D5D7E5; 
  box-shadow: 0px 20px 0px -10px #D5D7E5;

  /* .border {
    width: 350px;
    height: 5px;
    background: #D5D7E5;
    border-radius-bottom-left: 4px;
    border-radius-bottom-right: 4px;
  } */

  .dropbtn {
    padding-left: 20px;
    padding-top: 10px;
    margin: 0;
  }

  .dropdown-content {
    display: none;
  }

  &:hover .dropdown-content {
    display: block;
    position: absolute;
    background: white;
    width: inherit;
    width: 400px;
    list-style: none;
    padding: 0;
    li {
      background: #FFFFFF;
      color: #000000;
      padding: 15px 20px;
      font-weight: bold;

      &:hover {
        background: rgba(213, 215, 229, 0.3)
      }
    }
  }
`;

export const NavFormButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: #2A2B8D;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`;
