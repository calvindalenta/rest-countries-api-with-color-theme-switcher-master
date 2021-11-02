import CountriesListContainer from "../components/CountriesList";
import Container from "../styled/Container";
import Header from "../UI/Header";

export default function CountriesListPage(props){
    document.title = "Countries API"
    return (
        <>
            <Header />
            <Container>
                <CountriesListContainer />
            </Container> 
        </>
    );
}