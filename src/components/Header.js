import styled from "styled-components";
import Container from "./Container";
import FlexBetween from "./FlexBetween";

const StyledHeader = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primary};
    padding-block: 1em;
`;

const DarkModeButton = styled.button`
  cursor: pointer;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: 1px solid ${({theme}) => theme.textPrimary};
  padding: 0.5em 1em;
`;

export default function Header({ onClickDarkModeButton }) {
  return (
    <StyledHeader>
        <Container>
            <FlexBetween>
                <h2>Where in the world?</h2>
                <DarkModeButton onClick={onClickDarkModeButton}>☽ Dark Mode</DarkModeButton>
            </FlexBetween>
        </Container>
    </StyledHeader>
  );
}

Header.defaultProps = {
  onClickDarkModeButton: () => console.warn("Unimplemented onClickDarkModeButton")
}
