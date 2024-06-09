import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/components/HomePage/HomePage';
import ProjectsPage from './components/ProjectsPage/ProjectsPage';
import ProjectDetails from './components/ProjectDetails/ProjectDetails';
import ContactPage from '../src/components/ContactPage/ContactPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Simule un délai de chargement de 2 secondes

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router basename="/Portfolio/">
            <div className="content-wrapper">
                <Header />
                <main className="main-content">
                    {loading ? (
                        <Loader />
                    ) : (
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/projects/:id" element={<ProjectDetails />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    )}
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
