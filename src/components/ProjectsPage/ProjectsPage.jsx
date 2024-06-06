
import ProjectList from '../Projectlist/Projectlist.jsx';

const projects = [
    { title: 'Project One', description: 'This is a description of project one.', link: '#' },
    { title: 'Project Two', description: 'This is a description of project two.', link: '#' },
    { title: 'Project Three', description: 'This is a description of project three.', link: '#' }
];

const ProjectsPage = () => {
    return (
        <div className="projects-page">
            
            <main>
                <section className="projects-section">
                    <h2>All Projects</h2>
                    <ProjectList projects={projects} />
                </section>
            </main>
            
        </div>
    );
};

export default ProjectsPage;
