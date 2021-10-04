import styled from "styled-components"

const StyledSearchInput = styled.input`
  width: 50%;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;
`


export default function SearchInput() {
    return (
        <StyledSearchInput type="text" placeholder="Search for a country"/>
    );
}