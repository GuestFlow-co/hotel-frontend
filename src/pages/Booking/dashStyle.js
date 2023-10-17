import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
  display: flex;
  flex-direction: column; /* Change to column to create rows */
  align-items: center; /* Center the form horizontally */
`;

export const FormHeader = styled.h2`
  text-align: center;
  color: #333;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  display: block;
  width: fit;
  padding: 10px;
  background: #ab6034;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const AddressTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
`;

export const FlexItem = styled.div`
  margin-bottom: 10px;
  flex: 0 0 calc(50% - 10px); /* Set flex to 50% for 2 items in a row */
  margin-right: 10px; /* Add a small right margin to separate items */
`;