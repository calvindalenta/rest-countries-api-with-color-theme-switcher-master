import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.primary};
    padding-block: 1em;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 375px) {
      h2 {
        font-size: 1.2em;
      }
    }
`;

export default StyledHeader;
