import { Header } from "../../Components/Header/Header";
import { ListTitle } from "../../Components/PokeList/style.js";
import { Main } from "./style.js";
import background from "../../assets/background-details.png"
import { BackgroundImage, Container } from "./style.js";
import { CardDetails } from "../../Components/CardDetails/CardDetails";
import { GlobalStyle } from "../../GlobalStyle";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../baseUrl";

export function DetailsPage() {
    const pathParams = useParams();
    const page = "details"
  return (
    <Container>
      <GlobalStyle/>
      <Header page={page}/>
      <Main>
        <BackgroundImage src={background} alt="Background-Ball"/>
        <ListTitle>Detalhes</ListTitle>
        <CardDetails url={`${baseUrl}pokemon/${pathParams.id}`}/>
      </Main>
    </Container>
  );
}
