import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const handleCardClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };

    return (
        <div className="projects-page">
            <main>
                <section className="projects-section">
                    <h2>Mes Projets</h2>    
                    <div className="projects-grid">
                        {projects.map(project => (
                            <ProjectCard 
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                imageUrl={project.imageUrl}
                                link={project.link}
                                onClick={() => handleCardClick(project.id)}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectsPage;
