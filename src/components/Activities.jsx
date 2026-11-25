import { useEffect, useState } from "react";
export default function Activities({ user }) {
  const [activities, setActivities] = useState(() => { try { return JSON.parse(localStorage.getItem("comunired-activities")) || []; } catch { return []; } });
  const [registrations, setRegistrations] = useState(() => { try { return JSON.parse(localStorage.getItem("comunired-registrations")) || []; } catch { return []; } });
  const [form, setForm] = useState({ title: "", category: "Académica", date: "", place: "", description: "", capacity: 10 });
  const [message, setMessage] = useState("");
  useEffect(() => localStorage.setItem("comunired-activities", JSON.stringify(activities)), [activities]);
  useEffect(() => localStorage.setItem("comunired-registrations", JSON.stringify(registrations)), [registrations]);
  function handleChange(event) { setForm({ ...form, [event.target.name]: event.target.value }); }
  function handleSubmit(event) {
    event.preventDefault();
    if (!user) return setMessage("Regístrate para crear una actividad.");
    setActivities((items) => [...items, { id: Date.now(), ...form, capacity: Number(form.capacity), organizer: user.name }]);
    setForm({ title: "", category: "Académica", date: "", place: "", description: "", capacity: 10 });
    setMessage("¡Actividad creada correctamente!");
  }
  function register(activity) {
    if (!user) return setMessage("Regístrate para participar.");
    if (registrations.some((item) => item.activityId === activity.id && item.userName === user.name)) return setMessage("Ya estás inscrito en esta actividad.");
    const count = registrations.filter((item) => item.activityId === activity.id).length;
    if (count >= activity.capacity) return setMessage("Esta actividad ya no tiene cupos.");
    setRegistrations((items) => [...items, { activityId: activity.id, userName: user.name }]);
    setMessage("¡Te has inscrito correctamente!");
  }
  function cancel(activityId) {
    setRegistrations((items) => items.filter((item) => !(item.activityId === activityId && item.userName === user?.name)));
    setMessage("Tu inscripción ha sido cancelada.");
  }
  function edit(activity) {
    if (activity.organizer !== user?.name) return setMessage("No puedes editar esta actividad.");
    const title = prompt("Nuevo nombre de la actividad:", activity.title);
    if (title === null) return;
    const description = prompt("Nueva descripción:", activity.description);
    if (description === null) return;
    if (!title.trim() || !description.trim()) return setMessage("Los campos no pueden estar vacíos.");
    setActivities((items) => items.map((item) => item.id === activity.id ? { ...item, title: title.trim(), description: description.trim() } : item));
    setMessage("¡Actividad actualizada correctamente!");
  }
  const myActivities = activities.filter((activity) => registrations.some((item) => item.activityId === activity.id && item.userName === user?.name));
  return <section className="activities" id="actividades"><h2>Actividades de la comunidad</h2><p>Descubre, organiza y participa en nuevas experiencias.</p>
    <div className="activity-form"><h3>Crear una actividad</h3><form onSubmit={handleSubmit}>
      <label htmlFor="activity-title">Nombre de la actividad</label><input id="activity-title" name="title" value={form.title} onChange={handleChange} required />
      <label htmlFor="activity-category">Categoría</label><select id="activity-category" name="category" value={form.category} onChange={handleChange}><option>Académica</option><option>Deportiva</option><option>Cultural</option><option>Ambiental</option><option>Comunitaria</option></select>
      <label htmlFor="activity-date">Fecha</label><input id="activity-date" type="date" name="date" value={form.date} onChange={handleChange} required />
      <label htmlFor="activity-place">Lugar general</label><input id="activity-place" name="place" value={form.place} onChange={handleChange} required />
      <label htmlFor="activity-description">Descripción</label><textarea id="activity-description" name="description" value={form.description} onChange={handleChange} required />
      <label htmlFor="activity-capacity">Cupo de participantes</label><input id="activity-capacity" type="number" name="capacity" min="1" value={form.capacity} onChange={handleChange} required />
      <button className="primary-button" type="submit">Crear actividad</button></form></div>
    {message && <p className="register-message">{message}</p>}<h3>Actividades disponibles</h3>
    <div className="activity-grid">{activities.length === 0 ? <p>Todavía no hay actividades creadas.</p> : activities.map((activity) => {
      const count = registrations.filter((item) => item.activityId === activity.id).length;
      const enrolled = registrations.some((item) => item.activityId === activity.id && item.userName === user?.name);
      const full = count >= activity.capacity;
      return <article className="activity-card" key={activity.id}><span aria-hidden="true">🌱</span><h3>{activity.title}</h3><p><strong>Categoría:</strong> {activity.category}</p><p><strong>Fecha:</strong> {activity.date}</p><p><strong>Lugar:</strong> {activity.place}</p><p>{activity.description}</p><p><strong>Organiza:</strong> {activity.organizer || "Comunidad"}</p><p><strong>Participantes:</strong> {count} / {activity.capacity}</p><button className="primary-button" onClick={() => register(activity)} disabled={!user || enrolled || full}>{enrolled ? "Ya estás inscrito" : full ? "Cupo completo" : "Inscribirme"}</button>{activity.organizer === user?.name && <button className="secondary-button" onClick={() => edit(activity)}>Editar actividad</button>}</article>;
    })}</div>
    <h2>Mis actividades</h2><div className="activity-grid">{!user ? <p>Regístrate para consultar tus actividades.</p> : myActivities.map((activity) => <article className="activity-card" key={activity.id}><h3>{activity.title}</h3><p><strong>Fecha:</strong> {activity.date}</p><p><strong>Lugar:</strong> {activity.place}</p><button className="secondary-button" onClick={() => cancel(activity.id)}>Cancelar inscripción</button></article>)}</div>
  </section>;
}
