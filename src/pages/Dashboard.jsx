import { Link } from "react-router";
import SiteHeader from "../components/SiteHeader.jsx";
import "../styles/pages.css";

export default function Dashboard({ user, onLogout, activities, profile }) {
  return <div className="app">
    <SiteHeader onLogout={onLogout} />
    <main>
      <section className="dashboard-heading"><p className="eyebrow">Panel de la comunidad</p><h1>Hola{user?.name ? `, ${user.name}` : ""}</h1><p>Explora actividades, participa o crea una para tu comunidad.</p><p className="prototype-note">Funciones de demostración: los datos se guardan localmente en este navegador.</p></section>
      {activities}{profile}
    </main>
    <footer className="site-footer"><span>EntornoActivo · Prototipo escolar</span><Link to="/privacidad">Aviso de privacidad</Link></footer>
  </div>;
}
