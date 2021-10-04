import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme } from "./theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
