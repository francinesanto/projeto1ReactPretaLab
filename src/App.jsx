import Header from "./components/Header"
import Form from "./components/Form"
import ListaDeEstudantes from "./components/ListaDeEstudantes"
import Footer from "./components/Footer"
import { estudantes } from "./data/estudantes"
import { useState, useEffect } from "react"
import Contador from "./components/Contador"
function App() {

  const listaStorage = localStorage.getItem("estudantes");
  const [lista, setLista] = useState(JSON.parse(listaStorage) || estudantes);
  
 // onCreate
 useEffect(() => {
  if (listaStorage) {
    setLista(JSON.parse(listaStorage));
  }
}, []);

 // onUpdate
 useEffect(() => {
  localStorage.setItem("estudantes", JSON.stringify(lista));
}, [lista]);

  return (
    <>
        <Header />
        <Contador />
        <Form lista = {lista} setLista = {setLista} />
        <ListaDeEstudantes lista = {lista}/>
        <Footer mensagem = 'Desenvolvido por Francine Santos'/>

    </> 
  )

}

export default App
