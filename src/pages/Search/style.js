import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
display: flex;
align-items: center;
  text-align: center;
 justify-content:space-between;
 padding-top: 40px ;
h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
}
body {
  background-color:${(props) => props.theme.backgroundColor};
  align-items: center;
  text-align: center;
 justify-content:space-between;
 flex-direction: column;
}


`
export const Theme={
  mainColor:"#d8f8b7",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#e6c4c0",
  light: {
    mainColor:"#39a6a3",
  backgroundColor:"rgb(216, 226, 225)",
  textColor:"#231e23",
},
 
  dark: {
    mainColor: "rgb(216, 226, 225)",
    backgroundColor:"#231e23",
    textColor:"rgb(216, 226, 225)",},
};
  

export const List= styled.div`
gap:30px;

align-items:  center;
    text-align: center;
   display:flex;
   justify-content:space-between;
   padding-top: 90px ;
   `


export const Ul=styled.ul`
text-align: left;
    font-size: large;
    padding-left: 50%;
    background-color: "#e2bcb7";
  

`
export const Tr=styled.td`
 align-items:  center;
    text-align: center;
    display:table-row-group;
    justify-content:center;
   padding-top: 2%;
    width: 100px;
    height: 100px;
   `
export const ThemeButton = styled.button`
background-color: "#39a6a3";
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.backgroundColor};
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 40%;
    float: left;
  }
  p {
    vertical-align: middle;
  }
`;
export const BackButton = styled.button`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 2px solid ${(props) => props.theme.mainColor};
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  margin-right: 1%;
  
  &:hover {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const DeleteButtonStyled = styled.button`
  background-color: white;
  color: black;
  border: 2px solid #39a6a3;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  &:hover {
    background-color: #39a6a3;
    color: white;
  }
`;

export const DeleteButton = styled.button`
  background-color:"#39a6a3";
  color: black;
  border: 2px solid #39a6a3;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  margin: 0 auto;
  display: block;
 
  &:hover {
    background-color: #deeeea;
    color: white;
  }
`;
export const RoomWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
  }
  p {
    text-align: center;
    &.product-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;export const ListWrapper = styled.div`
align-items: center;
justify-content: center;
display: flex;
`;
export const Button = styled.button`
  background: ${(props) => props.color ?? "white"};
  color: ${(props) => props.textColor ?? "black"};
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  &:hover {
    box-shadow: 0 9px #aaa;
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
 
`;

export const ButtonsWrapper = styled.div`
   justify-content: right;
   margin-top: 20%;
   margin-left: 13%;
   padding: 3%;
   width: 50vw;
`;

export const BackButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  margin-top: 2%;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;


export const CreateButtonStyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const AddButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.pink};
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin: auto;
  display: block;
`;
export const FormStyled = styled.div`
  display: container;
  margin-top: 2em;
  margin-bottom: 40px;
  margin-left: 20em;
  margin-right: 20em; 
  h2 {
    text-align: center;
    margin-bottom: 1em;
  }
`;

export const FormButtons = styled.div`
  align-items: center;
  justify-content: center;  
  display: flex;
`;
export const NavRoom = styled(NavLink)`
  padding: 0.25em 1em;
  text-decoration: none;
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: ${(props) => props.theme.pink};
  }
`;

export const ListForm = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

export const Form = styled.form`
  width: 50%;
`;
export const FormButton = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const H = styled.h1`
  margin-bottom: 50px;
`;
export const Override = styled.div`
  display: block;
  margin: 0 auto;
  border-color: red;
  justify-content: center;
  display: flex;
`;
