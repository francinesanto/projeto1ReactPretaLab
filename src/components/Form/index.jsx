import CaixaDeTexto from "../CaixaDeTexto"
import CampoSelect from "../CampoSelect"
import Titulo from "../Titulo"
import Botao from "../Botao"
import './style.css'
const Form = () => {
   const cargos = ['backend', 'frontend', 'design', 'UI']
   return ( 
    <section className="form">
      <form action="">
         <Titulo texto='Digite os dados:'/>
         <CaixaDeTexto label= 'Nome' placeholder ='Digite o seu nome'/>
         <CaixaDeTexto label= 'Cargo' placeholder='Digite o seu cargo' />
         <CaixaDeTexto label= 'Imagem' placeholder='Digite o endereço da sua imagem' />
         <CampoSelect label= 'Time' opcoes={cargos}/>
         <Botao label = 'Criar card' />
      </form>
    </section>
   )
}

export default Form