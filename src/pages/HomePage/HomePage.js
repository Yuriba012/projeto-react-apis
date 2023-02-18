import { Header } from "../../Components/Header/Header.js";
import { PokeList } from "../../Components/PokeList/PokeList.js";
import { Container } from "./style.js";
import { GlobalStyle } from "../../GlobalStyle.js";

export function HomePage() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <PokeList />
    </Container>
  );
}
