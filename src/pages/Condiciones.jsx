import InfoPage from "./InfoPage.jsx";
export default function Condiciones() {
  return <InfoPage title="Condiciones del prototipo">
    <p>Esta versión de EntornoActivo es una demostración escolar para explorar actividades, registrar participación y mostrar perfiles.</p>
    <ul><li>El inicio de sesión de la práctica no verifica cuentas ni contraseñas.</li><li>La información de actividades, inscripciones y perfil se maneja localmente en el navegador.</li><li>Los permisos visuales del prototipo no validan quién puede organizar actividades.</li><li>La aprobación administrativa, búsqueda avanzada y conexión con un servidor no están implementadas.</li><li>No uses esta versión para guardar información sensible ni para coordinar eventos reales sin supervisión escolar.</li></ul>
    <p>El contenido describe el estado actual de la demostración y puede cambiar durante el desarrollo.</p>
  </InfoPage>;
}
