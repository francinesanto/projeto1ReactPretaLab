import Header from "./components/Header"
import Form from "./components/Form"
import ListaDeEstudantes from "./components/ListaDeEstudantes"
import Footer from "./components/Footer"
import { estudantes } from "./data/estudantes"
import { useState } from "react"
function App() {
  
  const [lista, setLista] = useState(estudantes)
  return (
    <>
        <Header />
        <Form lista = {lista} setLista = {setLista} />
        <ListaDeEstudantes lista = {lista}/>
        <Footer mensagem = 'Desenvolvido por Francine Santos'/>

    </> 
  )

}

export default App
