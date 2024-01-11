import CaixaDeTexto from "../CaixaDeTexto"
import Titulo from "../Titulo"
import Botao from "../Botao"

import './style.css'
const Form = ({lista, setLista}) => {
   //console.log(lista)
   const cargos = ['backend', 'frontend', 'design', 'UI']
   const criarCard = (event) => {
      event.preventDefault() //parar de atualizar a pagina quando clica no botao- funciona para formulario
      const nome = document.getElementById('nome').value
      const foto = document.getElementById('foto').value
      const comida = document.getElementById('comida').value
      const experiencia = document.getElementById('experiencia').value
    
      const estudante = {
         foto: foto,
         nome: nome,
         comidaQueNaoGosta: comida,
         experienciaPositiva: experiencia
      }

      const novaLista = [...lista,estudante]
      setLista(novaLista)
      //console.log(lista)
   }
   return ( 
    <section className="form">
      <form action="">
         <Titulo texto='Digite os dados:'/>
         <CaixaDeTexto id= 'nome'  label= 'Nome' placeholder ='Digite o seu nome'/>
         <CaixaDeTexto id= 'foto' label= 'Foto' placeholder='Digite a url da sua foto' />
         <CaixaDeTexto id= 'comida' label= 'Comida que você não gosta' placeholder='Digite a comida que você não gosta' />
         <CaixaDeTexto id= 'experiencia' label= 'Experiência Positiva' placeholder='Digite uma experiência positiva' />
         <Botao texto = 'Criar card' acao = {criarCard} />
      </form>
    </section>
   )
}

export default Form