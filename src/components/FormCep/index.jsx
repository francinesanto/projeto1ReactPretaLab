
import Botao from "../Botao"
import "./styles.css"


const FormCep = (cep ,rua, cidade, estado, latitude, longitude) => {
    return (
        
            <section className="form">
               <h1>Consulte seu Cep</h1>
               <p>via <a href="https://brasilapi.com.br/">Brasil API</a></p>
               <input type="text" name="cep"  placeholder="Digite seu CEP" value={cep} onChange={(e) => setCep(e.target.value)}/> 
               <Botao texto="Buscar" acao={obterDadosCep}/>
                <form action="" className="formCep">
                   <label htmlFor="rua">Rua</label>
                   <input type="text"  value={rua} />

                   <label htmlFor="cidade">Cidade</label>
                   <input type="text"  value={cidade}/>
                   
                   <label htmlFor="estado">Estado</label>
                   <input type="text" value={estado}  />

                   <label htmlFor="latitude">Latitude</label>
                   <input type="text" value={latitude}  />

                   <label htmlFor="longitude">Longitude</label>
                   <input type="text" value={longitude} />
                </form>
            </section>   
        
     
    )
}    

export default FormCep