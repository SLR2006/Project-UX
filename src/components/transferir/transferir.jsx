import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./transferir.module.css";

export const Transferir = ({ balance, onComplete }) => {
  const navigate = useNavigate();
  const [recipient, setRecipient] = useState("");
  const [accountType, setAccountType] = useState("Ahorros");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const submit = (event) => {
    event.preventDefault();
    const numericAmount = Number(amount);
    if (!/^\d{7,15}$/.test(recipient)) return setError("Ingresa un teléfono válido.");
    if (!accountType) return setError("Selecciona un tipo de cuenta.");
    if (!Number.isFinite(numericAmount) || numericAmount <= 0) return setError("Ingresa un monto válido.");
    if (numericAmount > balance) return setError("No tienes saldo suficiente.");
    onComplete(numericAmount, recipient);
    navigate("/historial");
  };

  return (
    <main className={styles.screen}>
      <Link to="/home" className={styles.back}>← Volver</Link>
      <form className={styles.card} onSubmit={submit}>
        <span className={styles.brand}>Ruraap</span>
        <h1>Enviar dinero</h1>
        <label htmlFor="recipient">Número de cuenta (teléfono)</label>
        <input id="recipient" value={recipient} onChange={(event) => setRecipient(event.target.value)} inputMode="numeric" placeholder="Ej. 3001234567" />
        <label htmlFor="accountType">Tipo de cuenta</label>
        <select id="accountType" value={accountType} onChange={(event) => setAccountType(event.target.value)}>
          <option>Ahorros</option>
          <option>Corriente</option>
        </select>
        <label htmlFor="transferAmount">Cuánto vas a enviar</label>
        <input id="transferAmount" type="number" min="1" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="$ 0" />
        {error && <p className={styles.error} role="alert">{error}</p>}
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
};
