import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProjectDetails from './components/ProjectDetails/ProjectDetails'; // Import ProjectDetails component
import ContactPage from '../src/components/ContactPage/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <div className="content-wrapper">
                <Header />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/projects/:id" element={<ProjectDetails />} /> {/* Add route for project details */}
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
