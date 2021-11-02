import StyledSearchInput from "./StyledSearchInput";
import SearchContainer from "./SearchContainer";

SearchInput.defaultProps = {
    onChangeInput: () => console.warn("Unimplemented onChangeInput")
}

export default function SearchInput({ onChangeInput }) {
    return (
        <SearchContainer>
          <span>🔎︎</span>
          <StyledSearchInput type="text" placeholder="Search for a country" onChange={onChangeInput}/>
        </SearchContainer>
    );
}