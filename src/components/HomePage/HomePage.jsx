

const HomePage = () => {
    return (
        <div className="homepage">
            <main>
                <div className="welcome-container">
                    <div className="background-image"></div>
                    <div className="welcome-content">
                        <section className="welcome-section">
                            <h1>Welcome to My Portfolio <span className="wave">👋</span></h1>
                            <p>Discover my projects and skills.</p>
                        </section>
                        <div className="welcome-image">
                            <img src="images/coding.png" alt="Coding" />
                        </div>
                    </div>
                </div>
                <section className="about-section">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                Hello! Im [Your Name], a passionate developer with experience in web development, 
                                specializing in front-end and back-end technologies. I enjoy creating interactive 
                                and responsive web applications that provide a seamless user experience.
                            </p>
        
                            <p>
                                I have a strong background in JavaScript, React, Node.js, and other modern web 
                                development tools. I love learning new technologies and staying up-to-date with 
                                industry trends to continuously improve my skills.
                            </p>
                            <p>
                                In my portfolio, you will find a selection of my projects that showcase my skills 
                                and expertise. Feel free to explore and reach out if you have any questions or 
                                opportunities.
                            </p>
                        </div>
                        <div className="about-image">
                            <img src="/images/portrait.webp" alt="About me" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;
