import { Link } from "react-router-dom"


import './styles.css'

const  Sobre= () => {
    return (
      
        <main className="center">
            <h3>Conheça mais sobre a :</h3>
            <Link className="link" to="/sobre/sobrePretaLab">
                <img src="/logopreta.jpg" alt="" />
            </Link>  
        </main>
      
    )
}

export default Sobre