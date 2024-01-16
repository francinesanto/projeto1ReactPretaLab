import Footer from "../Footer"
import Header from "../Header"
import Menu from "../Menu"
import './styles.css'

const Error = () => {
    return (
        <>
        < Menu/>
        < Header/>
        <h2>Página não encontrada, aprenda React e desenvolva uma =D</h2>
        <div className="img">
            <img src="../../../public/erro-404.png" alt="" />
        </div>
        <Footer mensagem={'Desenvolvido por Francine Santos'}/>
        </>
        )
    }

export default Error