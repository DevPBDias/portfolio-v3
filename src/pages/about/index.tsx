import { iconsData } from '../../data/iconsData'
import { AboutContainer, IconContainer, Section, TextContainer } from './styles'

function About() {
    return (
        <AboutContainer>
            <Section>
                <TextContainer>
                    <h4>About</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in. Dictum varius duis at consectetur lorem donec massa. Pulvinar pellentesque habitant morbi tristique. Egestas congue quisque egestas diam in arcu cursus euismod quis. Suspendisse in est ante in. Magnis dis parturient montes nascetur ridiculus mus. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Blandit volutpat maecenas volutpat blandit. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Semper risus in hendrerit gravida rutrum quisque non. Ornare arcu dui vivamus arcu felis. Nulla pharetra diam sit amet nisl.
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida in. Dictum varius duis at consectetur lorem donec massa. Pulvinar pellentesque habitant morbi tristique. Egestas congue quisque egestas diam in arcu cursus euismod quis. Suspendisse in est ante in. Magnis dis parturient montes nascetur ridiculus mus. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Blandit volutpat maecenas volutpat blandit. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Semper risus in hendrerit gravida rutrum quisque non. Ornare arcu dui vivamus arcu felis. Nulla pharetra diam sit amet nisl.
                    </p>
                </TextContainer>
                <TextContainer>
                    <h4>Skills</h4>
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
                    <h4>Graduation and Courses</h4>
                    <div className='text_content'>
                        <h6>Engineer civil</h6>
                        <p>My firsrt graduation at Pontificia Universidade Católica de Goiás (PUC-GO) -  2017</p>
                    </div>
                    <div className='text_content'>
                        <h6>Full stack developer</h6>
                        <p>Trybe - March/2023</p>
                        <p>This technical course encompassed 1,500 hours of comprehensive classes. Intense focus was dedicated to a variety of essential areas, including: Introduction to software development, front-end and back-end, computer science, software engineering, agile methodologies, and behavioral skills.</p>
                    </div>
                    <div className='text_content'>
                        <h6>UX Designer</h6>
                        <p>Google UX Design certificated course at Coursera - March/2024</p>
                        <p>What i learned in this course:</p>
                        <p>
                            ✔  Applying each step of the UX design process (empathize, define, ideate, prototype, and test) to create designs with a focus on social good.
                            <br />
                            ✔  Identifying differences between mobile apps and responsive web applications.
                            <br />
                            ✔  Understanding progressive enhancement and graceful degradation approaches to design for various devices.
                            <br />
                            ✔  Creating wireframes, mockups, and low/high-fidelity prototypes in Figma.
                            <br />
                            ✔ Adding a new design project to your professional UX portfolio.
                        </p>
                    </div>
                </TextContainer>
                <TextContainer>
                    <h4>Work experience</h4>
                    <h6>Freelancer</h6>
                    <p>
                        ✔ Developed the website for Olé Mídia company utilizing modern technologies including React, styled-components, TypeScript, and emailjs.
                    </p>
                    <p>
                        ✔ Designed and developed the website for Max Training Performance client, implementing modern technologies such as React.js, styled-components, and TypeScript.
                    </p>
                </TextContainer>
            </Section>
        </AboutContainer>
    )
}

export default About