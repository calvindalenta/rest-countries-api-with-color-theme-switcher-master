import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const CountryDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
`;

const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
        gap: 1em;
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

export default function Details({ countries }) {
    const { countryName } = useParams();
    const country = countries.find((country) => country.name === countryName);
    const currencies = country.currencies.map(currency => currency.name).join(', ');
    const languages = country.languages.map(language => language.name).join(', ');
    const borders = !country.borders ? '-' : country.borders.map(border => {
        const borderCountry = countries.find(country => country.alpha3Code === border);
        return <Link to={`/details/${borderCountry.name}`} key={borderCountry.name}><Border>{borderCountry.name}</Border></Link>;
    });

    return (
        <StyledDetails>
            <img src={country.flag} alt={country.name} />
            <CountryDetails>
                <h2>{country.name}</h2>
                <Info>
                    <div>
                        <p><span>Native Name:</span> {country.nativeName}</p>
                        <p><span>Population:</span> {country.population}</p>
                        <p><span>Region:</span> {country.region}</p>
                        <p><span>Sub Region:</span> {country.subregion}</p>
                        <p><span>Capital:</span> {country.capital}</p>
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
            </CountryDetails>
        </StyledDetails>
    );
}

Details.defaultProps = {
    countries: []
}