import ProjectCard from "../../components/card/ProjectCard"
import { projectsData } from "../../data/projectsData"
import { BtnsContainer, PortContainer, ProjectsContainer } from "./styles"

function Portfolio() {
  return (
    <PortContainer>
      <h4>Portfolio</h4>
      <BtnsContainer>
        <button type="button">All projects</button>
        <button type="button">Trybe projects</button>
        <button type="button">Freelances</button>
        <button type="button">Personal projects</button>
      </BtnsContainer>
      <ProjectsContainer>
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} data={project} />
          ))
        }
      </ProjectsContainer>
    </PortContainer>
  )
}

export default Portfolio