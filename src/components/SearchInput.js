import styled from "styled-components"

const StyledSearchInput = styled.input`
  width: 100%;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 0 1em;

  &::placeholder {
    color: ${({theme}) => theme.textPrimary};
  }

  &:focus {
    outline: none;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  span {
    font-size: 1.2em;
    transform: rotate(-90deg);
  }

  @media screen and (max-width: 768px){
      width: 100%;
  }
`;


export default function SearchInput({ onChangeInput }) {
    return (
        <SearchContainer>
          <span>🔎︎</span>
          <StyledSearchInput type="text" placeholder="Search for a country" onChange={onChangeInput}/>
        </SearchContainer>
    );
}


SearchInput.defaultProps = {
    onChangeInput: () => console.warn("Unimplemented onChangeInput")
}