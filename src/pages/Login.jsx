import { useNavigate, Link } from "react-router";
import SiteHeader from "../components/SiteHeader.jsx";
import "../styles/pages.css";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    // Práctica de navegación: por ahora no se validan ni guardan credenciales.
    navigate("/dashboard");
  }
  return (
    <div className="app"><SiteHeader /><main className="form-page">
      <section className="form-card">
        <p className="eyebrow">EntornoActivo · CBTis 122</p>
        <h1>Iniciar sesión</h1>
        <p>Completa el formulario para continuar al panel.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" type="email" autoComplete="email" required />
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" autoComplete="current-password" required />
          <button className="primary-button" type="submit">Entrar al Dashboard</button>
        </form>
        <Link className="text-link" to="/">← Volver al inicio</Link>
      </section>
    </main></div>
  );
}
