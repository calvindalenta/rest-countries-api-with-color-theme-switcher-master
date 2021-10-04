import styled from "styled-components";

const StyledFilter = styled.select`
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;

  @media screen and (max-width: 600px){
      width: 50%;
  }
`;

export default function Filter({ options }) {
    const optionsView = options.map(item => <option key={item} value={item}>{item}</option>);

    return (
        <StyledFilter name="Regions">
            <option hidden>Filter by region</option>
            {optionsView}
        </StyledFilter>
    );
}

Filter.defaultProps = {
    options: []
}