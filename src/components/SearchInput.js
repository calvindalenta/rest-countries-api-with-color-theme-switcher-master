import styled from "styled-components"

const StyledSearchInput = styled.input`
  width: 30%;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;

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