import { useNavigate } from "react-router-dom";
import styles from "./Registro.module.css";

export const Registro = () => {
  const navigate = useNavigate();

  const manejarEnvio = () => {
    navigate(home); //
  };

  return (
    <div className={styles.iphone16ProMax1}>
      <b className={styles.inicioDeSesion}>Inicio de sesión</b>

      <b className={styles.numeroDeTelefonoContainer}>
        <span className={styles.numeroDeTelefonoContainer2}>
          <span className={styles.numeroDeTelefon}>Número de teléfono</span>
        </span>
      </b>

      <input
        type="tel"
        className={styles.inputTelefono}
        placeholder="Ingresa tu número"
      />

      <b className={styles.contrasea}>Contraseña</b>

      <input
        type="password"
        className={styles.inputContrasena}
        placeholder="Ingresa tu contraseña"
      />

      <button className={styles.enviar} onClick={manejarEnvio}>
        Enviar
      </button>
    </div>
  );
};
