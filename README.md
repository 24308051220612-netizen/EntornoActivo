# EntornoActivo

Reconstrucción editable basada en el PDF `EntornoActivo_codigo_y_estructura.pdf`, la práctica de React Router y los textos de Quiénes Somos, servicios y privacidad compartidos para el proyecto.

## Ejecutar

1. Instala Node.js si todavía no está instalado.
2. En esta carpeta ejecuta `npm install`.
3. Ejecuta `npm run dev` y abre `http://127.0.0.1:5173` en el navegador de ese mismo equipo.

## Rutas

- `/` Inicio
- `/login` Inicio de sesión de demostración
- `/dashboard` Actividades y perfil
- `/quienes-somos` Quiénes Somos
- `/servicios` Servicios
- `/terminos` Términos
- `/condiciones` Condiciones
- `/privacidad` Aviso de privacidad
- Cualquier ruta desconocida muestra la página 404

El menú hamburguesa reúne el inicio, servicios, actividades, perfil y páginas informativas y legales. El acceso de Login es una demostración: el formulario navega al Dashboard y no autentica usuarios. Los datos del prototipo se guardan localmente en el navegador; no hay backend ni seguridad de servidor. Los avisos legales se presentan como borradores para el prototipo y deben revisarse con la institución antes de usarse para datos o eventos reales.

La dirección `127.0.0.1` solo abre la aplicación en el equipo que ejecuta Vite. Para compartirla por internet se necesitaría preparar un despliegue en otra etapa.

## Inicio de la base de datos

El primer modelo local de MongoDB está en `database/README.md` y su inicializador está en `database/init-mongodb.js`. No hay una conexión desde React todavía. Para crear las colecciones e índices en MongoDB local, instala MongoDB Server y `mongosh`, inicia el servidor en tu equipo y ejecuta `npm run db:init`. El inicializador no carga datos.
