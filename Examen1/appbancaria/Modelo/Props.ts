import { Transacciones } from "./Transacciones";

export interface Props{
    historial: Transacciones[];
    saldoFinal: number;
    setHistorial: (historial: Transacciones[]) => void;
}