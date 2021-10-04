import styled from "styled-components";
import Container from "./Container";
import FlexBetween from "./FlexBetween";

const StyledHeader = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primary};
    padding-block: 1em;
`;

export default function Header() {
  return (
    <StyledHeader>
        <Container>
            <FlexBetween>
                <h2>Where in the world?</h2>
                <button>Dark Mode</button>
            </FlexBetween>
        </Container>
    </StyledHeader>
  );
}
