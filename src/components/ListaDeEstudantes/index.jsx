import { estudantes } from "../../data/estudantes"
import Card from "../Card"
import './styles.css'
const ListaDeEstudantes = () => {
    return (
        <div className="wrapper">
            {
             estudantes.map((estudante) => (
                <Card 
                    nome ={estudante.nome}
                    fotoUrl ={estudante.foto}
                    comidaN = {estudante.comidaQueNaoGosta}
                    experienciaP = { estudante.experienciaPositiva}
                />
             ))
            }
        </div>
    )
}

export default ListaDeEstudantes