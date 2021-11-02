import styled from "styled-components";

const StyledCard = styled.div`
  width: 300px;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
`;

export default StyledCard;