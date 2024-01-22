import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContadorPage from "./pages/ContadorPage"
import ErrorPage from "./pages/ErrorPage"
import Sobre from "./pages/Sobre"
import SobreMim from "./pages/Sobre/SobreMim"
import PokemonPage from "./pages/PokemonPage"
import CepPage from "./pages/CepPage"
function App() {

  return (
    <>
      <Header />
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contador" element ={<ContadorPage/>} />
        <Route path='*' element = {<ErrorPage/>}/>
        <Route path="/sobre">
          <Route index element = {<Sobre />} />
          <Route path="sobreMim" element = {<SobreMim/>} />
        </Route>
        <Route path="/pokemon" element = {<PokemonPage/>}/>
        <Route path="/buscaCep" element = {<CepPage/>} />
      </Routes>
    </BrowserRouter>
  </div>
    <Footer mensagem={'Desenvolvido por Francine Santos'}/>
    </>
  )

}

export default App
