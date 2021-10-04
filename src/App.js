import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { darkTheme } from "./theme";


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      Wow!
    </ThemeProvider>
  );
}

export default App;
