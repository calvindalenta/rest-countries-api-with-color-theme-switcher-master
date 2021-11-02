import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
  
import { selectTheme } from "./state/ducks/themes/selectors";

import { darkTheme, lightTheme } from "./theme";

import GlobalStyle from "./styled/GlobalStyle";

import CountriesList from "./pages/CountriesList";
import CountryDetails from "./pages/CountryDetails";

function App({ isDarkTheme }) {
  return (
    <Router>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={CountriesList} />
          <Route exact path="/details/:countryCode" component={CountryDetails}/>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  isDarkTheme: selectTheme(state)
})

export default connect(mapStateToProps)(App);