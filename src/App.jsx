import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Registro } from "./components/Registro/Registro";
import { Home } from "./components/home/home";
import { Transferir } from "./components/transferir/transferir";
import { Retirar } from "./components/retirar/retirar";
import { HistorialTransferencia } from "./components/historialTransferencia/historialTr";
import { Ayuda } from "./components/ayuda/ayuda";
import { AyudaTransferir } from "./components/ayuda transferir/ayudaTrans";
import { AyudaHistorial } from "./components/ayuda historial/ayudaHist";

const initialMovements = [
  { id: 1, date: "04/11/2025", description: "Transferencia enviada", amount: -25000, status: "Exitosa" },
  { id: 2, date: "07/10/2025", description: "Transferencia enviada", amount: -15000, status: "Exitosa" },
  { id: 3, date: "16/09/2025", description: "Retiro cancelado", amount: 0, status: "Cancelada" },
];

export default function App() {
  const [balance, setBalance] = useState(150000);
  const [movements, setMovements] = useState(initialMovements);

  const addMovement = (movement) => {
    setMovements((current) => [{ ...movement, id: Date.now() }, ...current]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/home" element={<Home balance={balance} />} />
        <Route
          path="/transferir"
          element={
            <Transferir
              balance={balance}
              onComplete={(amount, recipient) => {
                setBalance((current) => current - amount);
                addMovement({
                  date: new Date().toLocaleDateString("es-CO"),
                  description: `Transferencia a ${recipient}`,
                  amount: -amount,
                  status: "Exitosa",
                });
              }}
            />
          }
        />
        <Route
          path="/retirar"
          element={
            <Retirar
              balance={balance}
              onComplete={(amount) => {
                setBalance((current) => current - amount);
                addMovement({
                  date: new Date().toLocaleDateString("es-CO"),
                  description: "Retiro de dinero",
                  amount: -amount,
                  status: "Exitosa",
                });
              }}
            />
          }
        />
        <Route path="/historial" element={<HistorialTransferencia movements={movements} />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="/ayuda/transferir" element={<AyudaTransferir />} />
        <Route path="/ayuda/historial" element={<AyudaHistorial />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
