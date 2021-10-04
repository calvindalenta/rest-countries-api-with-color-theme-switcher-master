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

function App() {

  const [isDarkTheme, setDarkTheme] = useState(true);

  const cards = data.map((country, index) => {
    return <Card key={index} country={country}/>;
  })

  function handleOnClickDarkModeButton(e) {
    setDarkTheme(!isDarkTheme)
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header onClickDarkModeButton={handleOnClickDarkModeButton}/>
      <Controls />
      <Cards>
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
