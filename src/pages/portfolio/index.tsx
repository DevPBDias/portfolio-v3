import ProjectCard from "../../components/card/ProjectCard"
import { projectsData } from "../../data/projectsData"
import { PortContainer, ProjectsContainer } from "./styles"

function Portfolio() {
  return (
    <PortContainer>
      <h4>Portfolio</h4>
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