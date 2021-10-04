import styled from "styled-components";

const StyledHeader = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primary};
    padding-block: 1em;
`;

const Container = styled.div`
    width: 90%;
    margin: auto;
`;

const FlexBetween = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
