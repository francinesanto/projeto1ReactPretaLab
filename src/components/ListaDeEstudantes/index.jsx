
import Card from "../Card"
import './styles.css'
const ListaDeEstudantes = ({lista}) => {
    return (
        <div className="wrapper">
            {
             lista.map((estudante,index) => (
                <Card 
                    key = {index}
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