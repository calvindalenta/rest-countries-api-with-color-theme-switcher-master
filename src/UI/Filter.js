import StyledFilter from "../styled/StyledFilter";

export default function Filter({ options, onChangeFilter }) {
    const optionsView = options.map(item => <option key={item} value={item}>{item}</option>);

    return (
        <StyledFilter name="Regions" onChange={onChangeFilter}>
            <option hidden>Filter by region</option>
            <option value="">No Filter</option>
            {optionsView}
        </StyledFilter>
    );
}

Filter.defaultProps = {
    options: [],
    onChangeFilter: () => console.warn("Unimplemented onChangeFilter")
}