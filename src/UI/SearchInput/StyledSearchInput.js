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

export default StyledSearchInput;