import Project from "./Project"
import { projects } from "../data"

export default function ProjectGrid() {
    
    console.log(projects)

    return (
        <main>
            <h2>Selected projects</h2>
            <div id="project-grid">
                {projects.map(project => {
                    return <Project key={project.title} project={project} />
                })}
            </div>
        </main>
    )
}