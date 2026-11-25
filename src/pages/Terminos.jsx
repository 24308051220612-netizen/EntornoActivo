import { Link } from "react-router";
import InfoPage from "./InfoPage.jsx";
export default function Terminos() {
  return <InfoPage title="Términos y condiciones de uso">
    <p><strong>Texto de referencia del proyecto · Última actualización indicada: 24 de noviembre de 2026.</strong></p>
    <p className="prototype-note">Borrador para un prototipo escolar. Debe revisarse con la institución antes de publicarse o usarse para gestionar datos y actividades reales.</p>
    <h2>1. Aceptación</h2><p>Al acceder, registrarse o utilizar EntornoActivo, las personas usuarias aceptan estas reglas. Si no están de acuerdo, pueden dejar de usar la plataforma.</p>
    <h2>2. Alcance del servicio</h2><p>EntornoActivo busca difundir y organizar actividades escolares y comunitarias, inicialmente vinculadas al CBTis 122. No sustituye las reglas de la escuela ni significa que el equipo del prototipo organice cada evento publicado.</p>
    <h2>3. Registro y seguridad</h2><p>Quien se registre debe proporcionar información correcta y cuidar sus credenciales. Las personas menores de edad deben consultar y seguir las indicaciones de su madre, padre o tutor y de la institución antes de asistir a actividades.</p>
    <h2>4. Participantes, organizadores y administradores</h2><ul><li><strong>Participantes:</strong> pueden consultar actividades, inscribirse una vez en cada actividad y cancelar su inscripción.</li><li><strong>Organizadores:</strong> la autorización para publicar y administrar actividades requiere validación en el alcance planeado; esta aprobación todavía no existe en el prototipo local.</li><li><strong>Administradores:</strong> el control para aprobar, rechazar o suspender contenido es una función futura, no disponible en esta versión.</li></ul>
    <h2>5. Conducta</h2><p>No se deben publicar actividades falsas o ajenas al propósito escolar y comunitario, subir material ofensivo o que invada la privacidad, suplantar a otras personas ni saturar inscripciones de forma automatizada.</p>
    <h2>6. Privacidad</h2><p>El prototipo guarda algunos datos en el navegador. No tiene actualmente un servicio de cuentas ni controles de seguridad de servidor. Consulta el <Link to="/privacidad">Aviso de privacidad</Link> para conocer el alcance actual de los datos locales.</p>
    <h2>7. Actividades y disponibilidad</h2><p>La información de eventos debe confirmarse con sus organizadores. La asistencia a eventos presenciales requiere seguir las indicaciones de la institución y de las personas responsables. Al ser un prototipo, la plataforma puede cambiar o dejar de estar disponible.</p>
    <h2>8. Autoría y cambios</h2><p>El material proporcionado atribuye el proyecto, su nombre e identidad al equipo escolar Los Ambystoma. Las reglas pueden actualizarse conforme avance el proyecto.</p>
    <h2>9. Revisión institucional</h2><p>El material de referencia propone que las controversias se atiendan conforme a las leyes aplicables en México y en Chihuahua. Esta cláusula se conserva como borrador y necesita revisión institucional antes de publicarse.</p>
    <p>Este texto es informativo para el proyecto escolar; no acredita por sí mismo cumplimiento legal ni reemplaza la revisión de la escuela.</p>
  </InfoPage>;
}
