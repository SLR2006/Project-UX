import { Link } from "react-router-dom";
import styles from "./ayudaTrans.module.css";

export const AyudaTransferir = () => (
  <main className={styles.screen}>
    <Link to="/ayuda" className={styles.back}>← Volver</Link>
    <section className={styles.card}>
      <span className={styles.brand}>Ruraap</span>
      <h1>Cómo enviar dinero</h1>
      <p>Selecciona el número de teléfono, el tipo de cuenta y el monto. Revisa los datos antes de confirmar el envío.</p>
    </section>
  </main>
);
