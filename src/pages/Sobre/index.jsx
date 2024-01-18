import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import './styles.css'

const  Sobre= () => {
    return (
      <>
        <Menu />
        <Header />
        <div className="divLink">
            <a href="https://www.pretalab.com/" target="_blank">PretaLab</a>
            <a href="">Sobre Mim</a>
        </div>
        <Footer mensagem = 'Desenvolvido por Francine Santos' />   
      </>
    )
}

export default Sobre