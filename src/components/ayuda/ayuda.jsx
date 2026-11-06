import { Link } from "react-router-dom";
import styles from "./ayuda.module.css";

export const Ayuda = () => (
  <main className={styles.screen}>
    <Link to="/home" className={styles.back}>← Volver</Link>
    <section className={styles.card}>
      <span className={styles.brand}>Ruraap</span>
      <h1>Ayuda</h1>
      <Link to="/ayuda/transferir">¿Cómo enviar dinero?</Link>
      <Link to="/ayuda/historial">¿Cómo revisar transferencias?</Link>
    </section>
  </main>
);
