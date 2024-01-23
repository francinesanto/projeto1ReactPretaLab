import { useState } from "react"
import axios from "axios"

const CepPage = () => {
    const [cep, setCep] = useState('');
    const [dadosCep, setDadosCep] = useState(null);
  
    const obterDadosCep = async () => {
      try {
        const resposta = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
        setDadosCep(resposta.data);
        console.log(resposta)
      } catch (erro) {
        console.error('Erro na requisição:', erro);
      }
    };
  
    return (
      <div>
        <label>
          Digite o CEP:
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </label>
        <button onClick={obterDadosCep}>Buscar</button>
  
        {dadosCep && (
          <div>
            <h2>Dados do CEP:</h2>
            <p>CEP: {dadosCep.cep}</p>
            <p>Logradouro: {dadosCep.street}</p>
            <p>Bairro: {dadosCep.neighborhood}</p>
            <p>Cidade: {dadosCep.city}</p>
            <p>Estado: {dadosCep.state}</p>
            <p>Longitude: {dadosCep.location.coordinates.longitude}</p>
            <p>Latitude: {dadosCep.location.coordinates.latitude}</p>
          </div>
        )}
      </div>
    );
}

export default CepPage