import styled, { ThemeProvider } from "styled-components";
import Filter from "./components/Filter";
import SearchInput from "./components/SearchInput";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme } from "./theme";
import Container from "./components/Container";
import FlexBetween from "./components/FlexBetween";
import Controls from "./components/Controls";
import data from "./mockData";
import Card from "./components/Card";
import Cards from "./components/Cards";

function App() {

  const cards = data.map(country => {
    return <Card country={country}/>;
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Controls />
      <Cards>
        {cards}
      </Cards>
    </ThemeProvider>
  );
}

export default App;
