import './styles.css'

const Card = ({fotoUrl, nome, comidaN, experienciaP }) => {
    return (
        <div className='card'>
            <img src={fotoUrl} alt="foto estudante" />
        <div className='container'>
            <h4>{nome}</h4>
            <p>Comida que não gosta: {comidaN}</p>
            <p>Experiência Positiva: {experienciaP}</p>
        </div>    
        </div>
        
    )
}

export default Card;