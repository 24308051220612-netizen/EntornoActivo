import { useState } from "react";
import { Link } from "react-router";
import Register from "../components/Register.jsx";
import SiteHeader from "../components/SiteHeader.jsx";
import "../styles/pages.css";

export default function LandingPage({ user, onRegister }) {
  const [showRegister, setShowRegister] = useState(false);
  return (
    <div className="app">
      <SiteHeader onRegisterClick={() => setShowRegister((value) => !value)} />
      <main>
        {showRegister && <Register onRegister={(data) => { onRegister(data); setShowRegister(false); }} />}
        <section className="hero">
          <p className="eyebrow">CBTis 122 · Comunidad</p>
          <h1>Conecta, participa y organiza.</h1>
          <p>Encuentra actividades escolares y comunitarias, participa y crea experiencias junto a otras personas.</p>
          <Link className="primary-button button-link" to="/dashboard#actividades">Explorar actividades</Link>
          {!user && <p className="hero-note">Puedes explorar el prototipo; el inicio de sesión de esta práctica es una demostración.</p>}
        </section>
        <section className="intro-section">
          <h2>Actividades que unen a nuestra comunidad</h2>
          <p>EntornoActivo inicia en el CBTis 122 y pone las actividades escolares y comunitarias en un solo lugar.</p>
          <div className="ods-row" aria-label="Objetivos de Desarrollo Sostenible relacionados">
            <span>ODS 4 · Educación de calidad</span><span>ODS 9 · Innovación</span><span>ODS 11 · Comunidades sostenibles</span>
          </div>
          <Link className="text-link" to="/servicios">Conoce los servicios →</Link>
        </section>
      </main>
      <footer className="site-footer">
        <span>EntornoActivo · CBTis 122 · Prototipo escolar</span>
        <nav aria-label="Información legal">
          <Link to="/terminos">Términos</Link><Link to="/condiciones">Condiciones</Link><Link to="/privacidad">Privacidad</Link>
        </nav>
      </footer>
    </div>
  );
}
