import { createContext, Dispatch, SetStateAction } from "react";


export interface TaskContextI {
    tasks: string[];
    setTasks: Dispatch<SetStateAction<string[]>>;
}

export const TaskContext = createContext<TaskContextI| null>(null);