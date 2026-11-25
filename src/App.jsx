import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Activities from "./components/Activities.jsx";
import ProfileAvatar from "./components/ProfileAvatar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Terminos from "./pages/Terminos.jsx";
import Condiciones from "./pages/Condiciones.jsx";
import NotFound from "./pages/NotFound.jsx";
import Servicios from "./pages/Servicios.jsx";
import AvisoPrivacidad from "./pages/AvisoPrivacidad.jsx";

export default function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("comunired-user")) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("comunired-user");
      return;
    }
    const publicProfile = {
      name: user.name,
      userType: user.userType,
      description: user.description,
    };
    localStorage.setItem("comunired-user", JSON.stringify(publicProfile));
  }, [user]);

  function handleRegister(userData) {
    setUser(userData);
  }

  function handleLogout() {
    setUser(null);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage user={user} onRegister={handleRegister} />}
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            onLogout={handleLogout}
            activities={<Activities user={user} />}
            profile={<ProfileAvatar user={user} />}
          />
        }
      />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/condiciones" element={<Condiciones />} />
      <Route path="/privacidad" element={<AvisoPrivacidad />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
