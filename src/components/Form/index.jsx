import CaixaDeTexto from "../CaixaDeTexto"
import Titulo from "../Titulo"
import Botao from "../Botao"

import './style.css'
import { useState } from "react"
const Form = ({lista, setLista}) => {
   const  [nome, setNome] = useState('')
   const  [foto, setFoto] = useState('')
   const  [comida, setComida] = useState('')
   const  [experiencia, setExperiencia] = useState('')
   //const cargos = ['backend', 'frontend', 'design', 'UI']
   const limparCampos = () => {
      setNome('')
      setFoto('')
      setExperiencia('')
      setComida('')
   }

   const criarCard = (event) => {
      event.preventDefault() //parar de atualizar a pagina quando clica no botao- funciona para formulario
     /* const nome = document.getElementById('nome').value
      const foto = document.getElementById('foto').value
      const comida = document.getElementById('comida').value
      const experiencia = document.getElementById('experiencia').value
    */
      const estudante = {
         foto: foto,
         nome: nome,
         comidaQueNaoGosta: comida,
         experienciaPositiva: experiencia
      }

      const novaLista = [...lista,estudante]
      setLista(novaLista)
      //console.log(lista)

      limparCampos()
   }
   return ( 
    <section className="form">
      <form action="">
         <Titulo texto='Digite os dados:'/>
         <CaixaDeTexto value= {nome}  label= 'Nome' placeholder ='Digite o seu nome' handleChange = {(e) => setNome(e.target.value)} />
         <CaixaDeTexto value= {foto} label= 'Foto' placeholder='Digite a url da sua foto' handleChange = {(e) => setFoto(e.target.value)}  />
         <CaixaDeTexto value= {comida} label= 'Comida que você não gosta' placeholder='Digite a comida que você não gosta'
         handleChange = {(e) => setComida(e.target.value)} />
         <CaixaDeTexto value= {experiencia} label= 'Experiência Positiva' placeholder='Digite uma experiência positiva' handleChange = {(e) => setExperiencia(e.target.value)} />
         <Botao texto = 'Criar card' acao = {criarCard} />
      </form>
    </section>
   )
}

export default Form