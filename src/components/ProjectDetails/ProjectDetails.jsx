import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProjectDetails.scss';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => {
                const project = data.find(proj => proj.id.toString() === id);
                setProject(project);
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
            <p>{project.description}</p>
            <p><strong className="skills-label">Compétences :</strong> {project.skills}</p>
            <p>{project.skillsDescription}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Voir le GitHub</a>
        </div>
    );
};

export default ProjectDetails;
