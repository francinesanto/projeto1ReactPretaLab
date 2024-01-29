import Botao  from "../Botao"
import Menu from "../Menu"
import Header from "../Header"
import Footer from "../Footer"
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
            
            <section className="contador-section">
                <h2 className="contadorH2">Contador</h2>
                <main className="contador-main">
                <Botao texto= '+' acao={handleClick1} />
                <h2 className="contadorH2" >{counter}</h2>
                <Botao texto= '-' acao={handleClick2} />
                </main>
            </section>
           
        </>
    )
}

export default Contador