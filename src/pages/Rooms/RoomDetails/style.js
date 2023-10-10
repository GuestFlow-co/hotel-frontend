import styled from "styled-components";

export const RoomDetailContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RoomDetailHeader = styled.h1`
  font-size: 24px;
  color: #333;
`;

export const RoomDetailItem = styled.p`
  font-size: 16px;
  color: #666;
`;

export const RoomPrice = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;

export const DetailWrapper = styled.div`
`;

export const BackButton = styled.button`
  background-color: ${(props) => (props.color ? props.color : "#007bff")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const Amenities = styled.div`

  overflow: hidden;
  padding: 16px;
  max-width: 300px;
  transition: transform 0.2s, border-color 0.2s;

  &:hover {
    transform: translateY(-4px);
    border-color: #007bff; /* You can change this color to your desired hover color */
  }
`;


