import { useState } from "react"
import FormCep from "../../components/FormCep"
import axios from "axios"

const CepPage = () => {
    const [cep, setCep] = useState('')

    const verificarCep = async () => {
        try {
            const resposta = await axios.get('https://brasilapi.com.br/api/cep/v1/{cep}')
            setCep(resposta.data)
            console.log(resposta)
        } catch (error) {
            console.error("Todos os serviços de cep retornaram erro", error)
        }
    }


    return (
          
         <FormCep/>
    )
}

export default CepPage