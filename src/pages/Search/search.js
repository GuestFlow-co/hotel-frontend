//styles
import { SearchBarStyled } from "./style";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(event) => {
        props.setQuery(event.target.value);
      }}
      placeholder="Write name or letter"
    />
  );
};

export default SearchBar;