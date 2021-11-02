import styled from "styled-components";
import Container from "./Container";

const CardsWrapper = styled(Container)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  justify-items: center;
  gap: 1.5em;
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1em;

  & > * {
    flex: 0 0 300px;
  } */
`;

export default CardsWrapper;