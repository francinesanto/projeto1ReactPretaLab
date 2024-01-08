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
         <CaixaDeTexto label= 'Foto' placeholder='Digite a url da sua foto' />
         <CaixaDeTexto label= 'Comida que você não gosta' placeholder='Digite a comida que você não gosta' />
         <CaixaDeTexto label= 'Experiência Positiva' placeholder='Digite uma experiência positiva' />
         <CampoSelect label= 'Experiência positiva' opcoes={cargos}/>
         <Botao label = 'Criar card' />
      </form>
    </section>
   )
}

export default Form