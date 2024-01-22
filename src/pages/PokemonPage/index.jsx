import { useState } from "react"
import CardPokemon from "../../components/CardPokemon"
import axios from "axios"
import { useEffect } from "react"
import Loader from "../../components/Loader"
import "./styles.css"
const PokemonPage = () => {
  const [refPokemons, setRefPokemons] = useState([])
  const [listaPokemons, setListaPokemons] = useState([])
  const [ loader, setLoader] = useState(true)

  const pegar100ReferenciasPokemons = async () => {
    try{
      const resposta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
      setRefPokemons(resposta.data.results)
      
    } catch (error) {
      console.error("Erro ao buscar as referecias dos pokemons", error)
    }
  }

  useEffect(() => {
    pegar100ReferenciasPokemons()
  },[])

  
  const pegarListaDePokemons = async () => {
    
    const listaTemporaria = []
    for (const referencia of refPokemons){
      try {
        const resposta = await axios.get(referencia.url)
        listaTemporaria.push(resposta.data)
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error)
      }
    }
    
    setListaPokemons(listaTemporaria)
    setLoader(false)
  }

  useEffect(() => {
    pegarListaDePokemons()
  }, [refPokemons])


 
   return (
      <div className="pokemonContainer">
       {listaPokemons.map((pokemon) => (
        <CardPokemon
         nome = {pokemon.name}
         foto = {pokemon.sprites.front_default}
         id = {pokemon.id} 
         url = {pokemon.forms[0].url}
         />
       ))}
      {!loader && <Loader/>}
      </div>
     
   )
    }

export default PokemonPage