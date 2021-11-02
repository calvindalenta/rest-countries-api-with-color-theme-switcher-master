import styled from "styled-components";

const BackButton = styled.div`
  width: 100px;
  padding: 0.5em 4em;
  margin-block: 3em;
  cursor: pointer;
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  font-weight: 600;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

export default BackButton;