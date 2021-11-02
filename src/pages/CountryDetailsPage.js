import CountryDetailsContainer from "../components/CountryDetails";
import Container from "../styled/Container";
import Header from "../UI/Header";

export default function CountryDetailsPage(props){
    document.title = "Countries API - Details"
    return (
        <>
            <Header />
            <Container>
                <CountryDetailsContainer {...props}/>
            </Container>
        </>
    );
}