import myPhoto from '../../assets/photo.png'
import { ContactContainer, PhotoContainer, TextContainer } from './styles'

function Contact() {
    return (
        <ContactContainer>
            <TextContainer>
                <h1 >Vamos nos conectar!</h1>
                <p>Email: devpbdias@gmail.com</p>
            </TextContainer>
            <PhotoContainer>
                <img src={myPhoto} alt="my photo" />
            </PhotoContainer>
        </ContactContainer>
    )
}

export default Contact