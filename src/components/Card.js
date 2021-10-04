import styled from "styled-components"

const StyledCard = styled.div`
  /* border: 1px solid red; */
  width: 300px;
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);

  img {
    object-fit: cover;
    width: 100%;
    height: 200px;
  }
`;

const CountryInfo = styled.div`
  padding: 0 2em 2em 2em;

  h3 {
    padding-block: 1em;
  }

  p {
    padding-block: 0.3em;

    span {
      font-weight: 600;
    }
  }
`

export default function Card({ country, onClick }) {
    return (
        <StyledCard onClick={onClick}>
            <img src={country.flag} alt={country.name}/>
            <CountryInfo>
                <h3>{country.name}</h3>
                <p><span>Population:</span> {country.population}</p>
                <p><span>Region:</span> {country.region}</p>
                <p><span>Capital:</span> {country.capital}</p>
            </CountryInfo>
        </StyledCard>
    );
}

Card.defaultProps = {
    country: {},
    onClick: () => console.warn("Unimplemented onClick")
}