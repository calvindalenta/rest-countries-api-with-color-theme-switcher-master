import { connect } from "react-redux";

import { selectCountries } from "../../state/ducks/countries/selectors";
import { filterByKeyword, filterByRegion } from "../../state/ducks/countries/utils";
import { selectRegionFilter, selectKeywordFilter } from "../../state/ducks/filters/selectors";

import CountriesListItem from "./CountriesListItem";
import CardsWrapper from "../../styled/CardsWrapper";

export function CountriesList({ countries }){
    const cards = countries.map((country, index) => {
        return <CountriesListItem key={country.alpha3Code} country={country}/>;
    })

    return (
        <CardsWrapper>
            {cards}
        </CardsWrapper>
    );
}

const mapStateToProps = (state) => {
    const regionFilter = selectRegionFilter(state)
    const keywordFilter = selectKeywordFilter(state)
    const countries = selectCountries(state)
    const filteredCountries = filterByKeyword(filterByRegion(countries, regionFilter), keywordFilter)
    
    return {
        countries : filteredCountries
    }
}

export default connect(mapStateToProps)(CountriesList)