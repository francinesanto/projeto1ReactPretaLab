import Header from "./components/Header"
import Form from "./components/Form"
import ListaDeEstudantes from "./components/ListaDeEstudantes"
import Footer from "./components/Footer"
function App() {
  return (
    <>
        <Header />
        <Form />
        <ListaDeEstudantes/>
        <Footer mensagem = 'Desenvolvido por Francine Santos'/>

    </> 
  )

}

export default App
