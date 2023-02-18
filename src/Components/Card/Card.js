import { Container, InfoText, Pokeball, PokeDetails, PokeImage } from "./style";
import pokeball from '../../assets/pokeball.png'
import poison from '../../assets/poison.png'
import grass from '../../assets/grass.png'
import bulbasaur from '../../assets/bulbasaur.png'

export function Card(){
    return(
        <Container>
            <Pokeball src={pokeball} alt="Pokeball"/>
            <div>
                <InfoText>
                    <p>#01</p>
                    <h1>Bulbasaur</h1>
                </InfoText>
                <img src={poison} alt="poison"/> 
                <img src={grass} alt="grass"/> 
            </div>
            <PokeDetails>
                <p>Detalhes</p>
                <button>Capturar!</button>
            </PokeDetails>
            <PokeImage src={bulbasaur} alt="Bulbasaur"/>
        </Container>
    )
}