import CountriesListContainer from "../components/CountriesList";
import Container from "../styled/Container";
import Header from "../UI/Header";

export default function CountriesList(props){
    return (
        <>
            <Header />
            <Container>
                <CountriesListContainer />
            </Container> 
        </>
    );
}