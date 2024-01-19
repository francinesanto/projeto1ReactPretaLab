import { Link } from "react-router-dom"


import './styles.css'

const  Sobre= () => {
    return (
      <>
        <main className="divLink">
            <Link className="link" to="https://www.pretalab.com/" target="_blank">PretaLab</Link>
            <Link className="link" to="">Sobre Mim</Link>
        </main>
      </>
    )
}

export default Sobre