import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./retirar.module.css";

export const Retirar = ({ balance, onComplete }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) return setError("Ingresa un monto válido.");
    if (numericAmount > balance) return setError("No tienes saldo suficiente.");
    if (!/^\d{4,8}$/.test(code)) return setError("Ingresa un código de retiro válido.");
    onComplete(numericAmount);
    navigate("/historial");
  };

  return (
    <main className={styles.screen}>
      <Link to="/home" className={styles.back}>← Volver</Link>
      <form className={styles.card} onSubmit={submit}>
        <span className={styles.brand}>Ruraap</span>
        <h1>Retirar dinero</h1>
        <label htmlFor="withdrawAmount">Cuánto vas a retirar</label>
        <input id="withdrawAmount" type="number" min="1" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="$ 0" />
        <label htmlFor="withdrawCode">Código de retiro</label>
        <input id="withdrawCode" value={code} onChange={(event) => setCode(event.target.value)} inputMode="numeric" placeholder="Ingresa el código" />
        {error && <p className={styles.error} role="alert">{error}</p>}
        <button type="submit">Confirmar retiro</button>
      </form>
    </main>
  );
};
