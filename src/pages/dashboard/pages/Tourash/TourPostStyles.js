import styled from 'styled-components';

export const PopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const PopupContent = styled.div`
position: absolute;
justify-content: center;
align-items: center;

  background-color: white;
  padding: 20px;
  border-radius: 20px;
  width: 60%;
  height: 70%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
  width:900px;
  background-color: white;
`;

export const Form = styled.form`
  width: 95%;
  max-width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

export const FormGroup = styled.div`
  width: 48%; /* Adjust width as needed */
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-child {
    background-color: #28a745; /* Green color for Create button */
    color: #fff;
  }

  &:last-child {
    background-color: #6c757d; /* Gray color for Cancel button */
    color: #fff;
  }
 
`;
