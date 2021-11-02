import { Link } from "react-router-dom";

import { numberWithCommas } from "../../utils";

import CountryInfo from "../../styled/CountryInfo";
import StyledCard from "../../styled/StyledCard";

Card.defaultProps = {
    country: {},
}

export default function Card({ country }) {
    return (
      <Link to={`details/${country.alpha3Code}`}>
        <StyledCard>
            <img src={country.flag} alt={country.name}/>
            <CountryInfo>
                <h3>{country.name}</h3>
                <p><span>Population:</span> {numberWithCommas(country.population)}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </CountryInfo>
        </StyledCard>
      </Link>
    );
}