
import { Link } from "react-router-dom"
import "./styles.css"

const  Menu = () => {
    return (
        
        <nav>
            <ul>
                <li>
                    <Link className='linkMenu' to="/"> Home</Link>
                </li>
                <li>
                    <Link className="linkMenu" to="/form"> Form </Link>
                </li>
                <li>
                    <Link className="linkMenu" to="/contador"> Contador </Link>
                </li>
                <li>
                    <Link className="linkMenu" to="/pokemon"> Pokemon </Link>
                </li>
                <li>
                    <Link className="linkMenu" to="/buscaCep">Busca CEP</Link>
                </li>
                <li>
                    <Link className="linkMenu" to="/sobre"> Sobre </Link>
                </li>
                
            </ul>
        </nav>
        
    )
}

export default Menu