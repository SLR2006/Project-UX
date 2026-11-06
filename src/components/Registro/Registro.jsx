import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Registro.module.css";

export const Registro = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (event) => {
    event.preventDefault();
    if (!/^\d{7,15}$/.test(phone)) {
      setError("Ingresa un número de teléfono válido.");
      return;
    }
    if (password.length < 4) {
      setError("La contraseña debe tener al menos 4 caracteres.");
      return;
    }
    navigate("/home");
  };

  return (
    <main className={styles.screen}>
      <form className={styles.card} onSubmit={manejarEnvio}>
        <span className={styles.brand}>Ruraap</span>
        <h1>Inicio de sesión</h1>
        <label htmlFor="phone">Número de teléfono</label>
        <input id="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Ingresa tu número" />
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Ingresa tu contraseña" />
        {error && <p className={styles.error} role="alert">{error}</p>}
        <button type="submit">Ingresar</button>
      </form>
    </main>
  );
};
