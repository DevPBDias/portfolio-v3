import { BtnsContainer, HomeContainer, TextContainer } from './styles'

function Home() {
  return (
    <HomeContainer>
      <TextContainer>
        <p>Hi, my name is</p>
        <h1>Paulo Bruno M. Dias.</h1>
        <h3>I’m a Web Developer and UX Designer.</h3>
        <p>Turning ideas into reality with innovation, quality and passion</p>
      </TextContainer>
      <BtnsContainer>
        <button>Check my work</button>
        <button>Download CV</button>
      </BtnsContainer>
    </HomeContainer>
  )
}

export default Home