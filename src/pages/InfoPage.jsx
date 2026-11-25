import { Link } from "react-router";
import SiteHeader from "../components/SiteHeader.jsx";
import "../styles/pages.css";
export default function InfoPage({ title, children }) {
  return <div className="app"><SiteHeader /><main className="info-page"><section className="info-card"><h1>{title}</h1>{children}<Link className="text-link" to="/">← Volver al inicio</Link></section></main><footer className="site-footer"><span>EntornoActivo · Prototipo escolar</span><Link to="/privacidad">Aviso de privacidad</Link></footer></div>;
}
