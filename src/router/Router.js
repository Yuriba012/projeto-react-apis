import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from '../pages/HomePage/HomePage.js'
import {PokedexPage} from '../pages/PokedexPage/PokedexPage.js'
import {DetailsPage} from '../pages/DetailsPage/DetailsPage.js'

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/pokedex" element={<PokedexPage/>}/>
                <Route path="/details/:id" element={<DetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}