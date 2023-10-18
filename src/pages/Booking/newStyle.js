import styled from "styled-components";


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

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;