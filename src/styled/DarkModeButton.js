import styled from "styled-components";

const DarkModeButton = styled.button`
  cursor: pointer;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: 0.1px solid ${({theme}) => theme.textPrimary};
  padding: 0.5em 1em;
`;

export default DarkModeButton;