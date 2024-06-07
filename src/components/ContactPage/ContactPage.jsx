// pages/ContactPage.jsx
const ContactPage = () => {
    return (
        <div className="contact-page">
            <main>
                <section className="contact-section">
                    <h2>Me contacter</h2>
                    <p>Vous pouvez me contacter par email à <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
                    <div className="contact-content">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                            </div>
                            <button type="submit">Envoyer</button>
                        </form>
                        <div className="contact-image">
                            <img src="images/mail.png" alt="Contact" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ContactPage;
