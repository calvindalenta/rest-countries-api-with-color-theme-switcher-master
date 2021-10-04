import { useParams } from "react-router";

export default function Details({ countries }) {
    const { countryName } = useParams();
    const country = countries.find((country) => country.name === countryName);
    const currencies = country.currencies.map(currency => currency.name).join(', ');
    const languages = country.languages.map(language => language.name).join(', ');
    const borders = country.borders.map(border => {
        const borderCountry = countries.find(country => country.alpha3Code === border);
        return <p key={borderCountry.name}>{borderCountry.name}</p>
    });
    
    return (
        <>
            <img src={country.flag} alt={country.name} />
            <h2>{country.name}</h2>
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
            <div>
                <p>Border Countries: </p>
                <div>
                    {borders}
                </div>
            </div>
        </>
    );
}

Details.defaultProps = {
    countries: []
}