import styled from "styled-components"

const StyledSearchInput = styled.input`
  width: 30%;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: ${({theme}) => theme.textPrimary};
  }

  @media screen and (max-width: 600px){
      width: 100%;
  }
`


export default function SearchInput() {
    return (
        <StyledSearchInput type="text" placeholder="Search for a country"/>
    );
}