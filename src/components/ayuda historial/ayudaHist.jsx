import { Link } from "react-router-dom";
import styles from "./ayudaHist.module.css";

export const AyudaHistorial = () => (
  <main className={styles.screen}>
    <Link to="/ayuda" className={styles.back}>← Volver</Link>
    <section className={styles.card}>
      <span className={styles.brand}>Ruraap</span>
      <h1>Revisar transferencias</h1>
      <p>En el historial puedes consultar la fecha, el destinatario, el monto y el estado de cada operación.</p>
    </section>
  </main>
);
