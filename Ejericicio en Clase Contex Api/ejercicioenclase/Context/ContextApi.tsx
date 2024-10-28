import { createContext } from "react";

export interface Estudiante{
    id: number
    name: string
}

interface ContextType {
    students: Estudiante[];
    setStudents: React.Dispatch<React.SetStateAction<Estudiante[]>>;
}

export const ContextTabla= createContext<ContextType>({
    students: [
        { id: 1, name: 'Juan' },
        { id: 2, name: 'María' },
        { id: 3, name: 'Carlos' },
        { id: 4, name: 'Ana' },
        { id: 5, name: 'Luis' },
        { id: 6, name: 'Pedro' },
        { id: 7, name: 'Sofía' },
        { id: 8, name: 'Javier' },
        { id: 9, name: 'Laura' },
        { id: 10, name: 'Diego' },
    ],
    setStudents: () => {}
})