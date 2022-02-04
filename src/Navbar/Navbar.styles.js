import styled from 'styled-components';

export const Nav = styled.nav` 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction : row;
  background: #000000;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
 
  @media screen and (max-width: 767px) {
    flex-direction : column;
  }
`;

export const NavIcon = styled.a`
  img {
    width: 70px;
    margin: 0 20px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom : 10px;
  }
`;

export const NavForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction : row;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    flex-direction : column;
    margin: auto;
  }
`;

export const NavFormInput = styled.input`
  max-width: 400px;
  width:90vw;
  height: 50px;
  padding: 15px;
  border-radius: 4px;
  border-color: transparent;
  margin-right: 20px;
  color: #050417;
  font-size: 16px;

  &:focus{
    outline: none;
  }
  @media screen and (max-width: 767px) {
    margin-bottom : 10px;
  }

  @media screen and (max-width: 1024px) and (min-width:768px) {
    max-width:200px
  }
`;

export const NavFormDropdown = styled.div`
  max-width: 400px;
  width:90vw;
  height: 50px;
  align-items: center;
  verticle-align: center;
  border-radius: 4px;
  border-color: transparent;
  margin-right: 20px;
  background: white;
  cursor: pointer;

  @media screen and (max-width: 1024px) and (min-width:768px) {
    max-width:200px
  }
  .dropbtn {
    padding-left: 20px;
    padding-top: 10px;
    margin: 0;
    position: relative;
    height: 45px;

    &:after {
      content:"";
      position:absolute;
      top:0px;
      bottom:10px;
      left:10px;
      right:10px;
      border-radius:10px;
      z-index:-1;
      box-shadow: #D5D7E5 0 15px 0px 0px;
    }
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background: white;
    width: inherit;
    width: 400px;
    list-style: none;
    padding: 0;
    margin: 0;
    transform: translateY(-10px);
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
  @media screen and (max-width: 1024px) and (min-width:768px) {
    .dropdown-content {
      width: 200px;
    }
  }
  
`;

export const NavFormButton = styled.button`
  width: 70vw;
  max-width:250px;
  height: 50px;
  border-radius: 25px;
  border: none;
  background: #2A2B8D;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-top : 20px;
  }

  @media screen and (max-width: 1024px) and (min-width:768px) {
    max-width:200px
  }
`;
