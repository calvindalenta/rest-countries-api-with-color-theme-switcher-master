import styled from "styled-components";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../../utils";

const StyledDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10em;

    & p {
        padding-block: 0.3em;

        span {
            font-weight: 600;
        }
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 3em;
    }
`;

const StyledCountryDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
`;

const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const BorderWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 1em;   
    }
`;

const Borders = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0.5em;
`;

const Border = styled.div`
    cursor: pointer;
    background-color: ${({theme}) => theme.primary};
    padding: 0.3em 1em;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
`;

export default function CountryDetails({ country, borderingCountries }) {
    const currencies = !country.currencies ? '-' : country.currencies.map(currency => currency.name).join(', ');
    const languages = !country.currencies ? '-' : country.languages.map(language => language.name).join(', ');
    const borders = !borderingCountries ? '-' : borderingCountries.map(country => {
        return <Link to={`/details/${country.alpha3Code}`} key={country.name}><Border>{country.name}</Border></Link>;
    });

    return (
        <StyledDetails>
            <img src={country.flag} alt={country.name} />
            <StyledCountryDetails>
                <h2>{country.name}</h2>
                <Info>
                    <div>
                        <p><span>Native Name:</span> {country.nativeName}</p>
                        <p><span>Population:</span> {numberWithCommas(country.population)   }</p>
                        <p><span>Region:</span> {!country.region ? '-' : country.region}</p>
                        <p><span>Sub Region:</span> {!country.subregion ? '-' : country.subregion}</p>
                        <p><span>Capital:</span> {!country.capital ? '-' : country.capital}</p>
                    </div>
                    <div>
                        <p><span>Top Level Domain:</span> {country.topLevelDomain}</p>
                        <p><span>Currencies:</span> {currencies}</p>
                        <p><span>Languages:</span> {languages}</p>
                    </div>
                </Info>
                <BorderWrap>
                    <p><span>Border Countries:</span></p>
                    <Borders>
                        {borders}
                    </Borders>
                </BorderWrap>
            </StyledCountryDetails>
        </StyledDetails>
    );
}

