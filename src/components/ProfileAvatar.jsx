import { useEffect, useState } from "react";
export default function ProfileAvatar({ user }) {
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  function handlePhotoChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) return setError("Selecciona una imagen válida.");
    if (file.size > 5 * 1024 * 1024) return setError("La imagen no debe superar los 5 MB.");
    setError("");
    setPhoto(URL.createObjectURL(file));
  }
  useEffect(() => () => { if (photo) URL.revokeObjectURL(photo); }, [photo]);
  return <section className="profile-section" id="perfil"><h2>Mi perfil</h2><div className="profile-card"><div className="avatar-container">{photo ? <img src={photo} alt="Foto de perfil" className="profile-photo" /> : <div className="default-avatar" aria-hidden="true">🌿</div>}</div><h3>{user?.name || "Mi usuario"}</h3><p>{user?.userType || "Miembro de EntornoActivo"}</p>{user?.email && <p>{user.email}</p>}{user?.description && <p>{user.description}</p>}<label htmlFor="photo-upload" className="upload-button">Elegir fotografía</label><input id="photo-upload" type="file" accept="image/*" onChange={handlePhotoChange} hidden />{error && <p className="error-message">{error}</p>}<p className="photo-help">Selecciona una imagen de máximo 5 MB.</p></div></section>;
}
