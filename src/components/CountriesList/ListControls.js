import { connect } from "react-redux";

import { getRegions } from "../../state/ducks/countries/selectors";
import { setKeyword, setRegion } from "../../state/ducks/filters/actions"

import StyledControls from "../../styled/StyledControls";

import SearchInput from "../../UI/SearchInput/SearchInput";
import Filter from "../../UI/Filter";

ListControls.defaultProps = {
    options: [],
    onChangeFilter: () => console.warn("Unimplemented onChangeFilter"),
    onChangeInput: () => console.warn("Unimplemented onChangeInput")
}

export function ListControls({ options, setKeyword, setRegion }) {
    function onChangeInput(e) {
        setKeyword(e.target.value)
    }

    function onChangeFilter(e) {
        setRegion(e.target.value)
    }

    return (
        <StyledControls>
            <SearchInput onChangeInput={onChangeInput}/>
            <Filter options={options} onChangeFilter={onChangeFilter}/>
        </StyledControls>
    );
}


const mapStateToProps = (state) => ({
    options : getRegions(state),
});

const mapDispatchToProps = {
    setKeyword,
    setRegion
}

export default connect(mapStateToProps, mapDispatchToProps)(ListControls)

