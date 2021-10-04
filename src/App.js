import styled, { ThemeProvider } from "styled-components";
import Filter from "./components/Filter";
import SearchInput from "./components/SearchInput";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <SearchInput type="text" placeholder="Search for a country"/>
      <Filter />
    </ThemeProvider>
  );
}

export default App;
