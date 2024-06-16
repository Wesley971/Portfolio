import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Hook personnalisé pour la récupération des données du projet
const useFetchProject = (id) => {
    // État pour stocker le projet
    const [project, setProject] = useState(null);
    // État pour stocker les erreurs éventuelles
    const [error, setError] = useState(null);
    // État pour indiquer le chargement
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fonction asynchrone pour récupérer les données du projet
        const fetchProject = async () => {
            try {
                // Récupération des données à partir du fichier JSON
                const response = await fetch('/Portfolio/projects.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Recherche du projet correspondant à l'identifiant
                const project = data.find(proj => proj.id.toString() === id);
                if (!project) {
                    throw new Error(`Project with id ${id} not found`);
                }
                // Mise à jour de l'état avec les détails du projet
                setProject(project);
            } catch (error) {
                // Gestion des erreurs
                console.error('Error fetching project details:', error);
                setError(error.message);
            } finally {
                // Mise à jour de l'état de chargement
                setLoading(false);
            }
        };

        // Appel de la fonction de récupération des données
        fetchProject();
    }, [id]);

    return { project, error, loading };
};

const ProjectDetails = () => {
    // Extraction de l'identifiant du projet à partir des paramètres de l'URL
    const { id } = useParams();
    // Utilisation du hook personnalisé pour récupérer les données du projet
    const { project, error, loading } = useFetchProject(id);

    // Affichage d'un message de chargement pendant la récupération des données
    if (loading) {
        return <div>Loading...</div>;
    }

    // Affichage d'un message d'erreur si une erreur s'est produite
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Affichage d'un message si le projet n'a pas été trouvé
    if (!project) {
        return <div>No project found.</div>;
    }

    // Affichage des détails du projet
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

// Ajout des PropTypes pour valider les propriétés du composant
ProjectDetails.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ProjectDetails;
