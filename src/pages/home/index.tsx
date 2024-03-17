import { Link } from 'react-router-dom'
import { BtnsContainer, HomeContainer, TextContainer } from './styles'

function Home() {
  return (
    <HomeContainer>
      <TextContainer>
        <p>Olá, sou</p>
        <h1>Paulo Bruno M. Dias.</h1>
        <h3>Sou desenvolvedor web e designer UX.</h3>
        <p>Transformando ideias em realidade com inovação, qualidade e paixão</p>
      </TextContainer>
      <BtnsContainer>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to='https://ux-portfolio-pbdias.vercel.app/'
          >Portfolio UX Design</Link>
        <Link
          to='/portfolio'
        >Portfolio Dev</Link>
      </BtnsContainer>
    </HomeContainer>
  )
}

export default Home