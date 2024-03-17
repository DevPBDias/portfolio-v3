import { iconsData } from '../../data/iconsData'
import { AboutContainer, IconContainer, Section, TextContainer } from './styles'

function About() {
    return (
        <AboutContainer>
            <Section>
                <TextContainer>
                    <h4>Sobre</h4>
                    <p>
                        Sou desenvolvedor front-end, formado pela Trybe.
                        Durante minha jornada como aluno, aprendi diversos conhecimentos para
                        aflorar minha paixão pela tecnologia, desenvolver minha criatividade e aprimorar
                        meu trabalho de equipe. Hoje me considero capaz de criar websites e aplicativos
                        desafiadores que possam se apresentar para mim.
                        <br />
                        <br />
                        Atualmente estou aprimorando meus conhecimentos adquiridos com projetos pessoais,
                        fazendo cursos como o Google UX Design, e alguns freelances. Meu intuito
                        como dev é ajudar o máximo de pessoas deixando o cotidiano deles
                        mais simples e fácil.
                    </p>
                </TextContainer>
                <TextContainer>
                    <h4>Habilidades</h4>
                    <IconContainer>
                        {
                            iconsData?.map(icon => (
                                <div
                                    className='icon_content'
                                    key={icon.id}
                                >
                                    <img src={icon.image} alt={icon.name} />
                                    <p>{icon.name}</p>
                                </div>
                            ))
                        }
                    </IconContainer>
                </TextContainer>
            </Section>
            <Section>
                <TextContainer>
                    <h4>Graduação e cursos</h4>
                    <div className='text_content'>
                        <h6>Engenheiro civil</h6>
                        <p>Minha primeira graduação na Pontifícia Universidade Católica de Goiás (PUC-GO) -  2017</p>
                    </div>
                    <div className='text_content'>
                        <h6>Desenvolvedor Web Full Stack</h6>
                        <p>Trybe - Março/2023</p>
                        <p>
                            Este curso técnico abrangeu 1.500 horas de aulas abrangentes. O foco intenso foi dedicado a uma variedade de áreas essenciais, incluindo: Introdução ao desenvolvimento de software, front-end e back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.</p>
                    </div>
                    <div className='text_content'>
                        <h6>UX Designer</h6>
                        <p>Google UX Design curso certificado no Coursera - Março/2024</p>
                        <p>O que foi aprendido:</p>
                        <p>
                            ✔ Aplicar cada etapa do processo de design UX (empatia, definir, idealizar, prototipar e testar) para criar designs com foco no bem social.
                            <br />
                            ✔ Identificando diferenças entre aplicativos móveis e aplicativos web responsivos.
                            <br />
                            ✔ Compreender abordagens de aprimoramento progressivo e degradação elegante para projetar vários dispositivos.
                            <br />
                            ✔ Criação de wireframes, mockups e protótipos de baixa/alta fidelidade no Figma.
                            <br />
                            ✔ Adicionando um novo projeto de design ao seu portfólio profissional de UX.
                        </p>
                    </div>
                </TextContainer>
                <TextContainer>
                    <h4>Experiência</h4>
                    <h6>Freelancer</h6>
                    <p>
                        ✔ Desenvolvi o site da empresa Olé Mídia utilizando tecnologias modernas como React, styled-components, TypeScript e emailjs.
                    </p>
                    <p>
                        ✔ Desenvolvi o site do cliente Max Training Performance, implementando tecnologias modernas como React.js, styled-components e TypeScript.
                    </p>
                </TextContainer>
            </Section>
        </AboutContainer>
    )
}

export default About