import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProjectCard = ({ title, description, imageUrl, link }) => {
    return (
        <div className="project-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link}>GitHub</Link>
        </div>
    );
};

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default ProjectCard;
