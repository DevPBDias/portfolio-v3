import { Link } from "react-router-dom"
import { CardContainer, ImageContainer, TechsContainer, TextContainer } from "./styles"

function ProjectCard({ data }: any) {
    return (
        <CardContainer>
            <ImageContainer>
                <img src={data.image} alt={data.name} />
            </ImageContainer>
            <TextContainer>
                <h6>{data.name}</h6>
                <span className="year">{data.year}</span>
                <div className="main_txt_content">
                    <p>{data.description}</p>
                    <TechsContainer>
                        {
                            data.techs.map((tech: string) => (
                                <span key={tech}>{tech}</span>
                            ))
                        }
                    </TechsContainer>
                </div>
                <Link to={data.link}
                    target="_blank"
                    rel="noopener noreferrer"

                >
                    View project
                </Link>
            </TextContainer>
        </CardContainer>
    )
}

export default ProjectCard