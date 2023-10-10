import styled from "styled-components";

export const RateManagerContainer = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const RatingContainer = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #007bff;
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

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

export const Star = styled.span`
  font-size: 24px;
  color: ${(props) => (props.yellow ? "gold" : "#ccc")};
`;

export const AverageRating = styled.p`
  font-size: 18px;
  color: #333;
  font-weight: bold;
`;
