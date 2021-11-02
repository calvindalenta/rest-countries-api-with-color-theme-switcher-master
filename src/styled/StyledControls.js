import styled from "styled-components"
import FlexBetween from "./FlexBetween";

const StyledControls = styled(FlexBetween)`
  width: 100%;
  padding-block: 2em;

  @media screen and (max-width: 768px){
      flex-direction: column;
      align-items: flex-start;
      gap: 1em;
  }
`

export default StyledControls;