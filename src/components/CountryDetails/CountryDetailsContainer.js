import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { 
    selectIsDataLoaded, 
    selectCountryByCode, 
    selectCountryBorderingCountries 
} from "../../state/ducks/countries/selectors"

import BackButton from "../../styled/BackButton";

import CountryDetails from "./CountryDetails";

export function CountryDetailsContainer({ isLoaded, country, borderingCountries }){
    return (
        <>
            <Link to="/">
            <BackButton>
                <span>←</span> 
                <span>Back</span>
            </BackButton>
            </Link>
            {isLoaded && <CountryDetails country={country} borderingCountries={borderingCountries} />}
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    const { countryCode } = ownProps.match.params
    return { 
        isLoaded: selectIsDataLoaded(state),
        country: selectCountryByCode(state, countryCode),
        borderingCountries: selectCountryBorderingCountries(state, countryCode)
    }
}

export default connect(mapStateToProps)(CountryDetailsContainer)