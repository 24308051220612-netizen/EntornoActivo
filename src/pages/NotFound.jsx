import { Link } from "react-router";
import InfoPage from "./InfoPage.jsx";
export default function NotFound() {
  return <InfoPage title="No encontramos esa página"><p>Revisa la dirección o vuelve al inicio de EntornoActivo.</p><Link className="primary-button button-link" to="/">← Volver al inicio</Link></InfoPage>;
}
