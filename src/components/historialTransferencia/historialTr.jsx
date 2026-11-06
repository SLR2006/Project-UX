import { Link } from "react-router-dom";
import styles from "./historialTr.module.css";

export const HistorialTransferencia = ({ movements }) => (
  <main className={styles.screen}>
    <Link to="/home" className={styles.back}>← Volver</Link>
    <section className={styles.card}>
      <span className={styles.brand}>Ruraap</span>
      <h1>Historial de movimientos</h1>
      {movements.length === 0 ? <p>No hay movimientos todavía.</p> : (
        <ul className={styles.list}>
          {movements.map((movement) => (
            <li key={movement.id}>
              <span><strong>{movement.description}</strong><small>{movement.date} · {movement.status}</small></span>
              <strong className={movement.amount < 0 ? styles.negative : styles.neutral}>
                {movement.amount < 0 ? "-" : ""}${Math.abs(movement.amount).toLocaleString("es-CO")}
              </strong>
            </li>
          ))}
        </ul>
      )}
    </section>
  </main>
);
