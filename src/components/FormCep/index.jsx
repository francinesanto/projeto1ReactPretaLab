import { useState } from "react"
import Botao from "../Botao"
import "./styles.css"


const FormCep = () => {
    return (
        
            <section className="form">
               <h1>Consulte seu Cep</h1>
               <p>via <a href="https://brasilapi.com.br/">Brasil API</a></p>
               <input type="text" name="cep"  placeholder="Digite seu CEP" /> 
               <Botao texto="Buscar" />
                <form action="" className="formCep">
                   <label htmlFor="rua">Rua</label>
                   <input type="text"   />

                   <label htmlFor="cidade">Cidade</label>
                   <input type="text" />
                   
                   <label htmlFor="estado">Estado</label>
                   <input type="text"  />

                   <label htmlFor="latitude">Latitude</label>
                   <input type="text"  />

                   <label htmlFor="longitude">Longitude</label>
                   <input type="text" />
                </form>
            </section>   
        
     
    )
}    

export default FormCep