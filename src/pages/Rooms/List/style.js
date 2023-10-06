import styled from 'styled-components';

export const RoomListWrapper = styled.div`
  background-color: #f5f5f5;
`;

export const ListWrapper = styled.div`
  margin-top: 20px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Loading = styled.div`
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 20%;

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-right: 10px;
  }

  input[type="date"],
  input[type="number"] {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 150px;
  }
`;
