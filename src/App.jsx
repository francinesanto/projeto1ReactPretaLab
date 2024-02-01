import { Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContadorPage from "./pages/ContadorPage"
import ErrorPage from "./pages/ErrorPage"
import Sobre from "./pages/Sobre"
import SobrePretaLab from "./pages/Sobre/SobrePretaLab"
import PokemonPage from "./pages/PokemonPage"
import CepPage from "./pages/CepPage"
import FormPage from "./pages/FormPage"
import Home from "./pages/Home"
import './styles.css'
function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/form" element ={<FormPage />} />
        <Route path="/contador" element ={<ContadorPage/>} />
        <Route path='*' element = {<ErrorPage/>}/>
        <Route path="/sobre">
          <Route index element = {<Sobre />} />
          <Route path="sobrePretaLab" element = {<SobrePretaLab/>} />
        </Route>
        <Route path="/pokemon" element = {<PokemonPage/>}/>
        <Route path="/buscaCep" element = {<CepPage/>} />
      </Routes>

    <Footer />
    </>
  )

}

export default App
