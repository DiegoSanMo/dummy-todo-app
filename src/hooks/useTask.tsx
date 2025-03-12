import { useContext } from 'react'
import { TaskContext } from '../Contexts/TaskContext'

const useTask = () => {
    const context = useContext(TaskContext);

    if(!context){
        throw new Error("TasksContext should be used only in TaskProvider");
    }
  return context
}

export default useTask