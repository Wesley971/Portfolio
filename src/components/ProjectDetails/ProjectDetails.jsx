import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch('/Portfolio/projects.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const project = data.find(proj => proj.id.toString() === id);
                if (!project) {
                    throw new Error(`Project with id ${id} not found`);
                }
                setProject(project);
                console.log(project);
            })
            .catch(error => console.error('Error fetching project details:', error));
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="project-details">
            <h2>{project.title}</h2>
            <img src={project.imageUrl} alt={project.title} className="project-details-image" />
            <p className="project-description">{project.description}</p> 
            <p><strong className="skills-label">Compétences :</strong> {project.skills}</p>
            <p className="skills-description">{project.skillsDescription}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le GitHub</a>
        </div>
    );
};

export default ProjectDetails;
