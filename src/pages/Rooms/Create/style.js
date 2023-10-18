import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 10
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
  margin-right:5%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding-right: 9%;
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
export const RoomCreateContainer = styled.div`
  transform: translateX(${(props) => (props.isActive ? '0' : '100%')});
  transition: transform 0.3s;
`;
export const FeatureChecklistContainer = styled.div`
  transform: translateX(${(props) => (props.isActive ? '0' : '100%')});
  transition: transform 0.3s;
`;

export const ContainerCheck = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr); 
gap: 10px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* Add other styles for the checkbox label */
`;

export const CheckboxInput = styled.input`
  /* Styles for the checkbox input */
  margin-right: 5px; /* Add space between the checkbox and text */
`;