import styled from 'styled-components';

export const RoomItemWrapper = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s; /* Add a transition for a smooth hover effect */

  /* Add hover styles */
  &:hover {
    transform: scale(1.05); /* Scale up the card on hover */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add a stronger shadow on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
`;

export const RoomItemTitle = styled.h2`
  font-size: 18px;
  margin: 0;
`;

export const RoomItemDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin: 10px 0;
`;

/* Add styles for items when hovering */
export const HoveredItems = styled.div`
  display: none;
  padding: 10px;

  ${RoomItemWrapper}:hover & {
    display: block;
  }
`;

/* Style for individual item within HoveredItems */
export const HoveredItem = styled.p`
  font-size: 14px;
  color: #333;
  margin: 5px 0;
`;
