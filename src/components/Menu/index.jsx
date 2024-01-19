
import "./styles.css"

const  Menu = () => {
    return (
        
        <nav>
            <ul>
                <li>
                    <a className="link" href="/"> Home </a>
                </li>
                <li>
                    <a  className="link" href="/contador"> Contador </a>
                </li>
                <li>
                    <a className="link" href="/sobre"> Sobre </a>
                </li>
            </ul>
        </nav>
        
    )
}

export default Menu