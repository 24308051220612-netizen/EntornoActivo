import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

export default function SiteHeader({ onRegisterClick, onLogout }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const close = () => setOpen(false);
  useEffect(() => {
    if (!open) return undefined;
    function handleKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);
  function logout() {
    close();
    onLogout?.();
    navigate("/");
  }
  return (
    <header className="navbar">
      <Link className="brand" to="/" onClick={close}>EntornoActivo</Link>
      <button
        className={`menu-toggle${open ? " is-open" : ""}`}
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="main-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <nav id="main-menu" className={`main-menu${open ? " is-open" : ""}`} aria-label="Menú principal" hidden={!open}>
        <Link to="/" onClick={close}>Inicio</Link>
        <Link to="/servicios" onClick={close}>Servicios</Link>
        <Link to="/quienes-somos" onClick={close}>Quiénes Somos</Link>
        <Link to="/dashboard#actividades" onClick={close}>Actividades</Link>
        <Link to="/dashboard#perfil" onClick={close}>Mi perfil</Link>
        {onRegisterClick && <button type="button" className="menu-link-button" onClick={() => { close(); onRegisterClick(); }}>Crear cuenta</button>}
        {!onLogout && <Link to="/login" onClick={close}>Iniciar sesión</Link>}
        <Link to="/terminos" onClick={close}>Términos</Link>
        <Link to="/condiciones" onClick={close}>Condiciones</Link>
        <Link to="/privacidad" onClick={close}>Aviso de privacidad</Link>
        {onLogout && <button type="button" className="menu-link-button" onClick={logout}>Cerrar sesión</button>}
      </nav>
    </header>
  );
}
