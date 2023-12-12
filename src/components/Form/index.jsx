import CaixaDeTexto from "../CaixaDeTexto"
import CampoSelect from "../CampoSelect"
const Form = () => {
   const cargos = ['backend', 'frontend', 'design', 'UI']
   return ( 
    <>
    <b>Preencha com os dados:</b>
    <CaixaDeTexto label= 'Nome' placeholder ='Digite o seu nome'/>
    <CaixaDeTexto label= 'Cargo' placeholder='Digite o seu cargo' />
    <CaixaDeTexto label= 'Imagem' placeholder='Digite o endereço da sua imagem' />
    <CampoSelect label= 'Time' opcoes={cargos}/>
    </>
   )
}

export default Form