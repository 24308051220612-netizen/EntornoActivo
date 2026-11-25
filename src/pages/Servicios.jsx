import { Link } from "react-router";
import InfoPage from "./InfoPage.jsx";
export default function Servicios() {
  return <InfoPage title="Servicios">
    <p>EntornoActivo se enfoca en el ciclo de descubrir, organizar y participar en actividades. Estas son las funciones del prototipo y las que quedan planteadas para etapas posteriores.</p>
    <div className="service-list">
      <article className="service-card"><h2>Explorar actividades</h2><p>El prototipo muestra actividades con categoría, fecha, lugar, descripción y cupo. La búsqueda y los filtros avanzados quedan como mejora futura.</p><Link to="/dashboard#actividades">Ver actividades →</Link></article>
      <article className="service-card"><h2>Inscripción y cancelación</h2><p>El prototipo permite inscribirse una vez por actividad según el nombre del perfil y cancelar desde el mismo navegador. La identificación robusta de cuentas requiere una futura conexión con servidor.</p></article>
      <article className="service-card"><h2>Crear y editar actividades</h2><p>En esta versión local, una persona registrada puede crear actividades y editar las que aparecen asociadas a su nombre. La aprobación de organizadores todavía no está implementada.</p></article>
      <article className="service-card"><h2>Perfil y participación</h2><p>El perfil permite ver información básica y elegir una fotografía. El panel muestra las actividades en las que la persona está inscrita.</p><Link to="/dashboard#perfil">Ver perfil →</Link></article>
      <article className="service-card planned"><h2>Moderación administrativa</h2><p>La revisión y aprobación de organizadores y actividades forma parte del alcance planeado, pero necesita funciones de administración y validación en servidor que este prototipo aún no tiene.</p><span>Etapa futura</span></article>
    </div>
  </InfoPage>;
}
