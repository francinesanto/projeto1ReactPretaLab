
import "./styles.css"

const  Menu = () => {
    return (
        
        <nav>
            <ul>
                <li>
                    <a className='linkMenu' href="/"> Home</a>
                </li>
                <li>
                    <a className="linkMenu" href="/form"> Form </a>
                </li>
                <li>
                    <a  className="linkMenu" href="/contador"> Contador </a>
                </li>
                <li>
                    <a className="linkMenu" href="/pokemon"> Pokemon </a>
                </li>
                <li>
                    <a className="linkMenu" href="/buscaCep">Busca CEP</a>
                </li>
                <li>
                    <a className="linkMenu" href="/sobre"> Sobre </a>
                </li>
                
            </ul>
        </nav>
        
    )
}

export default Menu