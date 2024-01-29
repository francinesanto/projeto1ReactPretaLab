import { Link } from 'react-router-dom'
import './styles.css'

const Home = () => {
  return (
    <>
      <main className='intro'>

        <h1>Hello,World</h1>

        <div className='pins'>
          <p>React</p>
        </div>
       
        <div className='detalhe1'>
        <img src="/detalhe1.svg" alt=""  />
        </div>
       
      </main>

      <section id='sobreMim'>
          <div className='titulo'>
            <h2>sobre mim</h2>
          </div>
          <div className='perfil'>
            <img src="/fotoPerfil.png" alt="" />
            <p>Profissional em transição de carreira, tive uma primeira oportunidade com desenvolvimento <strong> backend</strong> em projetos desenvolvidos em node JS/Typescript, no momento me qualifico para trabalhar com <strong>REACT</strong>. Trabalhei por mais de 8 anos em eventos corporativos e vendas, tendo facilidade em comunicação, boa adaptação para mudanças e para solução de problemas.
            </p>
          </div>
          <div className='detalhe2'>
            <img src="/detalhe2.png" alt=""  />
          </div>
      </section>

      <section id='descricaoCurso'>   
        <div className='desc'>
            <h2>Ciclo formativo PretaLab</h2>
        </div>

        <div id='pinsCont'>
          <div className='pin'>
            <h3>Html</h3>
          </div>
          <div className='pin'>
            <h3>Css</h3> 
          </div>
          <div className='pin'>
            <h3>Javascript</h3>
          </div>
          <div className='pin'>
            <h3>React</h3>
          </div>
          <div className='pin'>
            <h3>Testes com Jest</h3>
          </div>
        </div>
        <div className='divLink'>
        <Link href="/sobre">Sobre a PretaLab</Link>
        </div>
      </section>
    </>
  )

}

export default Home