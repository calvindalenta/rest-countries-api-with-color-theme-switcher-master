import styled, { ThemeProvider } from "styled-components";
import Filter from "./components/Filter";
import SearchInput from "./components/SearchInput";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import Container from "./components/Container";
import FlexBetween from "./components/FlexBetween";
import Controls from "./components/Controls";
import data from "./mockData";
import Card from "./components/Card";
import Cards from "./components/Cards";
import { useState } from "react";

const regions = data.reduce((prev, curr) => {
  if (!prev.includes(curr.region)){
    prev.push(curr.region);
  }
  return prev;
}, []);


function App() {

  const [isDarkTheme, setDarkTheme] = useState(true);
  const [regionFilter, setRegionFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const filteredCards = data.filter(country => {
    if (!regionFilter) return true;
    if (country.region === regionFilter) return true;
    return false;
  }).filter(country => {
    if (!searchInput) return true;
    if (country.name.includes(searchInput)) return true;
    return false;
  });

  const cards = filteredCards.map((country, index) => {
    return <Card key={index} country={country}/>;
  })

  function handleOnClickDarkModeButton(e) {
    setDarkTheme(!isDarkTheme)
  }

  function handleOnChangeFilter(e) {
    console.log(e.target.value)
    setRegionFilter(e.target.value);
  }

  function handleOnChangeInput(e) {
    setSearchInput(e.target.value);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onClickDarkModeButton={handleOnClickDarkModeButton}/>
      <Controls options={regions} onChangeFilter={handleOnChangeFilter} onChangeInput={handleOnChangeInput}/>
      <Cards>
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
