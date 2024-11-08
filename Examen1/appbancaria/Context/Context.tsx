import { createContext } from "react";
import { Transacciones } from "../Modelo/Transacciones";

export const contextobancario = createContext({
    saldo: 0,
    deposito: '',
    retiro: 0,
    setSaldo: (saldo:number) =>{},
    setRetiro: (saldo:number) =>{},
    setDeposito: (deposito:string) =>{},
    depositarSaldo: (deposito: number) => {},
    retirarSaldo: (retiro: number) => {},
    histotrans: [] as Transacciones[],
    retirohistorico: (cuenta: string, mont: number, nombre: string) => {},
    depositohistorico: (mont: number) => {}
})