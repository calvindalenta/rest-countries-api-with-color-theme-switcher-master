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

function App() {

  const cards = data.map(country => {
    return <Card country={country}/>;
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Controls />
      {cards}
    </ThemeProvider>
  );
}

export default App;
