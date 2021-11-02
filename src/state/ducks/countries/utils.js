export const filterByRegion = (countries, region) => {
    return countries.filter(country => {
        if (!region) return true;
        if (country.region === region) return true;
        return false;
    })
}

export const filterByKeyword = (countries, keyword) => {
    return countries.filter(country => {
        if (!keyword) return true;
        if (country.name.includes(keyword)) return true;
        return false;
    });
}