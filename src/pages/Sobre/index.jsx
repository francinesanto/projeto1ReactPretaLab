import { Link } from "react-router-dom"


import './styles.css'

const  Sobre= () => {
    return (
      
        <main className="center">
            <Link className="link" to="https://www.pretalab.com/" target="_blank"><p>PretaLab</p></Link>
            <Link className="link" to="/sobre/sobreMim"><p>Sobre Mim</p></Link>
        </main>
      
    )
}

export default Sobre