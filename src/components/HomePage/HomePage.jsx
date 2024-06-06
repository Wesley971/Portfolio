import  { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';

const HomePage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setProjects(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div className="homepage">
            <main>
                <section className="welcome-section">
                    <h1>Welcome to My Portfolio</h1>
                    <p>Discover my projects and skills.</p>
                </section>
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
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
