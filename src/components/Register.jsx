import { useState } from "react";
import { Link } from "react-router";

export default function Register({ onRegister }) {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", userType: "Estudiante", description: "", acceptedNotice: false });
  const [message, setMessage] = useState("");
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setMessage("");
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (form.password.length < 8) return setMessage("La contraseña debe tener al menos 8 caracteres.");
    if (form.password !== form.confirmPassword) return setMessage("Las contraseñas no coinciden.");
    if (!form.acceptedNotice) return setMessage("Lee y marca la casilla del aviso para continuar.");
    onRegister({ name: form.name, email: form.email, userType: form.userType, description: form.description });
    setMessage("Perfil de demostración creado. No se creó una cuenta real.");
  }
  return <section className="register-section" id="registro"><div className="register-card"><h2>Únete a EntornoActivo</h2><p>Formulario de demostración del prototipo.</p><form onSubmit={handleSubmit}>
    <label htmlFor="register-name">Nombre</label><input id="register-name" name="name" autoComplete="name" value={form.name} onChange={handleChange} required />
    <label htmlFor="register-email">Correo electrónico</label><input id="register-email" type="email" name="email" autoComplete="email" value={form.email} onChange={handleChange} required />
    <label htmlFor="register-type">Tipo de usuario</label><select id="register-type" name="userType" value={form.userType} onChange={handleChange}><option>Estudiante</option><option>Personal escolar</option><option>Vecino</option></select>
    <label htmlFor="register-description">Descripción</label><textarea id="register-description" name="description" value={form.description} onChange={handleChange} />
    <label htmlFor="register-password">Contraseña (solo para la demostración)</label><input id="register-password" type="password" name="password" minLength={8} autoComplete="new-password" value={form.password} onChange={handleChange} required />
    <label htmlFor="register-confirm">Confirmar contraseña</label><input id="register-confirm" type="password" name="confirmPassword" autoComplete="new-password" value={form.confirmPassword} onChange={handleChange} required />
    <aside className="privacy-summary"><h3>Aviso de privacidad simplificado</h3><p>Este prototipo usa los datos del formulario para mostrar un perfil de demostración. Guarda en este navegador el nombre, tipo de usuario y descripción; el correo y la contraseña no se guardan. Las actividades e inscripciones también se almacenan localmente. No envía esta información a un servidor.</p><p>Si eres menor de edad, revisa el uso del proyecto y las actividades con tu madre, padre o tutor y con la escuela.</p><p>Consulta el <Link to="/privacidad" target="_blank" rel="noreferrer">aviso integral</Link> y los <Link to="/terminos" target="_blank" rel="noreferrer">términos</Link>.</p>
      <label className="consent-label"><input type="checkbox" name="acceptedNotice" checked={form.acceptedNotice} onChange={handleChange} required /><span>He leído y acepto los Términos y Condiciones y el Aviso de Privacidad de EntornoActivo.</span></label>
    </aside>
    <button className="primary-button" type="submit">Crear perfil de demostración</button></form>{message && <p className="register-message" role="status">{message}</p>}</div></section>;
}
