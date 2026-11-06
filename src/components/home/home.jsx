import { Link } from "react-router-dom";
import styles from "./home.module.css";

export const Home = ({ balance }) => (
  <main className={styles.screen}>
    <header className={styles.header}>
      <span className={styles.brand}>Ruraap</span>
      <Link to="/" className={styles.logout}>Salir</Link>
    </header>
    <section className={styles.balanceCard}>
      <span>Saldo disponible</span>
      <strong>${balance.toLocaleString("es-CO")}</strong>
    </section>
    <nav className={styles.actions} aria-label="Acciones de la cuenta">
      <Link to="/transferir">Enviar dinero</Link>
      <Link to="/historial">Historial de movimientos</Link>
      <Link to="/retirar">Retirar dinero</Link>
      <Link to="/ayuda">Ayuda</Link>
    </nav>
  </main>
);
