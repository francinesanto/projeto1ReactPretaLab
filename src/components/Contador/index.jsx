import Botao  from "../Botao"
import CaixaDeTexto from "../CaixaDeTexto"
import Menu from "../Menu"
import Header from "../Header"
import Footer from "../Footer"
import Titulo from "../Titulo"
import { useState } from "react"
import './styles.css'
const Contador = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        //boa pratica
        setCounter((valorAnterior) => valorAnterior + 1)
    }
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter((valorAnterior) => valorAnterior - 1)
    }
   
    return (
        <>
            <Menu/>
            <Header/>
            <section className="contador-section">
                <h1>Contador</h1>
                <main className="contador-main">
                <Botao texto= '+' acao={handleClick1} />
                <h2>{counter}</h2>
                <Botao texto= '-' acao={handleClick2} />
                </main>
            </section>
            <Footer mensagem = 'Desenvolvido por Francine Santos'/>
        </>
    )
}

export default Contador