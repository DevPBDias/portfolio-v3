import { FooterContainer, IconsContainer, TextContainer } from './styles'
import { Link } from 'react-router-dom'
import githubIcon from '../../assets/GitHub.png'
import linkedInIcon from '../../assets/LinkedIn.png'


function Footer() {
  return (
    <FooterContainer>
      <TextContainer>
        <span>&copy; UX Designer & Web Developer PBDias</span>
      </TextContainer>
      <IconsContainer>
        <Link className='icons' to="https://github.com/DevPBDias/DevPBDias">
          <img src={githubIcon} alt="Github icon" />
        </Link>
        <Link className='icons' to="https://github.com/DevPBDias/DevPBDias">
          <img src={linkedInIcon} alt="Linkedin icon" />
        </Link>
      </IconsContainer>
    </FooterContainer>
  )
}

export default Footer