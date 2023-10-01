import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
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
    background-color: #6c757d; /* Gray color for Back button */
    color: #fff;
  }
`;
