import CaixaDeTexto from "../CaixaDeTexto"
const Form = () => {
   return ( 
    <>
    <b>Preencha com os dados:</b>
    <CaixaDeTexto label= 'Nome' placeholder ='Digite o seu nome'/>
    <CaixaDeTexto label= 'Cargo' placeholder='Digite o seu cargo' />
    <CaixaDeTexto label= 'Imagem' placeholder='Digite o endereço da sua imagem' />
    </>
   )
}

export default Form