import { ThemeProvider } from "styled-components";
import Filter from "./components/Filter";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Filter />
    </ThemeProvider>
  );
}

export default App;
