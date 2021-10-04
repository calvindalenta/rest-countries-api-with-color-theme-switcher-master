import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import { darkTheme, lightTheme } from "./theme";
import Controls from "./components/Controls";
import data from "./mockData";
import Card from "./components/Card";
import Cards from "./components/Cards";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from "react-router-dom";
import Details from "./components/Details";
import Container from "./components/Container";
import BackButton from "./components/BackButton";

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
    <Router>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header onClickDarkModeButton={handleOnClickDarkModeButton}/>
        <Switch>
          <Route exact path="/">
            <Controls options={regions} onChangeFilter={handleOnChangeFilter} onChangeInput={handleOnChangeInput}/>
            <Cards>
              {cards}
            </Cards>
          </Route>
          <Route exact path="/details/:countryName">
            <Container>
              <Link to="/">
                <BackButton>
                  <span>←</span> 
                  <span>Back</span>
                </BackButton>
              </Link>
              <Details countries={data}/>
            </Container>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;