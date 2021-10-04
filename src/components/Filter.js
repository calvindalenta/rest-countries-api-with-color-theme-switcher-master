import styled from "styled-components";

const StyledFilter = styled.select`
  background-color: ${({theme}) => theme.primary};
  color: ${({theme}) => theme.textPrimary};
  border: none;
  padding: 1em;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 600px){
      width: 50%;
  }
`;

export default function Filter({ options, onChangeFilter }) {
    const optionsView = options.map(item => <option key={item} value={item}>{item}</option>);

    return (
        <StyledFilter name="Regions" onChange={onChangeFilter}>
            <option hidden>Filter by region</option>
            {optionsView}
        </StyledFilter>
    );
}

Filter.defaultProps = {
    options: [],
    onChangeFilter: () => console.warn("Unimplemented onChangeFilter")
}