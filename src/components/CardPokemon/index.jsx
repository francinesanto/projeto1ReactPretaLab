import "./styles.css"

const CardPokemon = ({ id ,url, nome, foto }) => {
   return (
     <a href={url} key={id} className="pokemonItem">
        <img src={foto} alt="foto do pokemon" />
        <p>{nome}</p>
     </a>
   )
 }

export default CardPokemon