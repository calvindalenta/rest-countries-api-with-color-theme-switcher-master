import styled from "styled-components"
import Container from "./Container";
import FlexBetween from "./FlexBetween";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

const StyledControls = styled.div`
  width: 100%;
  padding-block: 2em;
`

export default function Controls({ options }) {
    return (
        <StyledControls>
            <Container>
                <FlexBetween>
                    <SearchInput type="text" placeholder="Search for a country"/>
                    <Filter options={options}/>
                </FlexBetween>
            </Container>
        </StyledControls>
    );
}

Controls.defaultProps = {
    options: []
}