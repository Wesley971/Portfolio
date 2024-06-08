import  { useState, useEffect } from 'react';

const HomePage = () => {
    const [welcomeText, setWelcomeText] = useState('Welcome to My Portfolio');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const texts = ['Welcome to My Portfolio', 'Bienvenue sur mon Portfolio'];
        let index = 0;

        const interval = setInterval(() => {
            setLoading(true);
            setTimeout(() => {
                index = (index + 1) % texts.length;
                setWelcomeText(texts[index]);
                setLoading(false);
            }, 500); // Duration of the loading effect
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const description1 = `Bonjour ! Je suis Wesley Abdoul, un développeur passionné par l'apprentissage de nouvelles technologies. J'aborde mon travail avec rigueur et détermination, combinant technologie et art grâce à une sensibilité artistique prononcée. J'aime relever des défis et créer des solutions innovantes.`;
    const description2 = `Grâce à mes projets, j'ai acquis des compétences en HTML, CSS, JavaScript et React, ainsi que dans des outils modernes de développement web. J'ai développé des compétences en design responsive, animations CSS, manipulation du DOM et gestion de l'état avec React. Mon parcours m'a également enseigné des techniques essentielles en SEO, optimisation des performances, débogage et refactorisation de code.`;
    const description3 = `Dans mon portfolio, vous trouverez une sélection de mes projets qui illustrent mes compétences et mon parcours. N'hésitez pas à explorer et à me contacter pour toute question ou opportunité. Je suis toujours ouvert à de nouvelles expériences et à l'apprentissage continu.`;  
    return (
        <div className="homepage">
            <main>
                <div className="welcome-container">
                    <div className="background-image"></div>
                    <div className="welcome-content">
                        <section className="welcome-section">
                            <h1 className={`welcome-text ${loading ? 'fade-out' : 'fade-in'}`}>
                                {welcomeText} <span className="wave">👋</span>
                            </h1>
                            <p>Discover my projects and skills.</p>
                        </section>
                        <div className="welcome-image">
                            <img src="/images/coding.png" alt="Coding" />
                        </div>
                    </div>
                </div>
                <section className="about-section">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                {description1}
                            </p>
        
                            <p>
                                {description2}
                            </p>
                            <p>
                               {description3}
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="./images/portrait.webp" alt="About me" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
