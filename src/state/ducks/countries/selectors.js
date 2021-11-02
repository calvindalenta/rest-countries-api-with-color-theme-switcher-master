export const selectCountriesState = (state) => state.countries

export const selectCountries = (state) => {
    return selectCountriesState(state).value
}

export const selectCountryByCode = (state, code) => {
    const countries = selectCountries(state)
    return countries.find((country) => country.alpha3Code === code);
}

export const selectCountryBorderingCountries = (state, code) => {
    const selectedCountry = selectCountryByCode(state, code)
    const countries = selectCountries(state)

    if (!selectedCountry || !selectedCountry.borders) return null

    const borderingCountries = selectedCountry.borders.map(borderingCountryCode => {
        return countries.find(country => country.alpha3Code === borderingCountryCode)
    })

    return borderingCountries
}

export const getRegions = (state) => {
    const countries = selectCountriesState(state).value
    const regions = countries.reduce((prev, curr) => {
        if (!prev.includes(curr.region)){
            prev.push(curr.region);
        }
        return prev;
    }, []);
    return regions
}

export const selectIsDataLoaded = (state) => {
    return Boolean(selectCountries(state).length > 0)
}