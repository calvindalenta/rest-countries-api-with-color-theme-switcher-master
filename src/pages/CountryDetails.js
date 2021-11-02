import CountryDetailsContainer from "../components/CountryDetails";
import Container from "../styled/Container";
import Header from "../UI/Header";

export default function CountryDetails(props){
    return (
        <>
            <Header />
            <Container>
                <CountryDetailsContainer {...props}/>
            </Container>
        </>
    );
}