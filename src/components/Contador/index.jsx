import Botao  from "../Botao"
import CaixaDeTexto from "../CaixaDeTexto"
import Titulo from "../Titulo"
import { useState } from "react"
const Contador = () => {
    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)

    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {
        // Counter state is decremented
        setCounter(counter - 1)
    }
   
    return (
        <section>
            <Titulo texto ='Contador' />
            <Botao texto= '+' acao={handleClick1} />
            <CaixaDeTexto  value= {counter} placeholder={counter} />
            <Botao texto= '-' acao={handleClick2} />
        </section>
    )
}

export default Contador