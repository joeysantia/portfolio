import Project from "./Project.js"
import { projects } from "../data.js"

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