import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  transition: transform 0.2s;
  border: none;
  color: white; /* Set text color to white */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export const RoomItemTitle = styled.h2`
  font-size: 18px;
  margin: 0;
  color: white; /* Set text color to white */
`;

export const RoomItemDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
  color: white; /* Set text color to white */
`;

export const HoveredItems = styled.div`
z-index: 3;
  position: absolute;
  bottom: 0; 
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.9);
  width: 26vw;
  color: white; /* Set text color to white */
`;

export const HoveredItem = styled.p`
  font-size: 14px;
  color: #333;
  margin: 5px 0;
  color: white; /* Set text color to white */
`;

export const ImgItem = styled.img`
  height: 60vh;
`;

export const TextWrapper = styled.div`
  padding: 10px;
  color: white; /* Set text color to white */
`;

export const CardDiv = styled.div`
  position: relative;
  display: block;
  width: 26vw;
  color: white; /* Set text color to white */
`;

export const InfoDiv = styled.div`
  position: absolute;
  left: 0; 
  color: white; /* Set text color to white */
  font-weight: 1000;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-text: center;
  margin-block-end: 20px;
  flex-wrap: wrap;
`;

export const RoomTypeContainer = styled.div`
  color: white; /* Set text color to white */
`;

export const RoomPriceContainer = styled.div`
  align-items: flex-end;
  color: white; /* Set text color to white */
`;