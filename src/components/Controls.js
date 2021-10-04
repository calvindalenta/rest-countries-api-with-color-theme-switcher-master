import styled from "styled-components"
import Container from "./Container";
import FlexBetween from "./FlexBetween";
import SearchInput from "./SearchInput";
import Filter from "./Filter";

const StyledControls = styled(FlexBetween)`
  width: 100%;
  padding-block: 2em;

  @media screen and (max-width: 600px){
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
  }
`

export default function Controls({ options, onChangeFilter }) {
    return (
        <Container>
            <StyledControls>
                <SearchInput type="text" placeholder="Search for a country"/>
                <Filter options={options} onChangeFilter={onChangeFilter}/>
            </StyledControls>
        </Container>
    );
}

Controls.defaultProps = {
    options: [],
    onChangeFilter: () => console.warn("Unimplemented onChangeFilter")
}