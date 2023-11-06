import { 
  FormEvent, 
  ChangeEvent, 
  InvalidEvent, 
  useState 
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TaskInteface } from '../types/task'

import { PlusCircle } from "phosphor-react"

import styles from './TodoForm.module.css'

interface TodoFormProps {
  addTask: (task: TaskInteface) => void
}

export function TodoForm({ addTask }: TodoFormProps) {
  const [newTask, setNewTask] = useState("")

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault()

    addTask({ id: uuidv4(), content: newTask, checked: false })
    setNewTask("")
  }

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setNewTask(event.currentTarget.value)
  }

  function handleNewTodoInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  return (
    <form className={styles.form} onSubmit={handleCreateTodo}>
      <input 
        required 
        type="text"
        name="todo"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleNewTodoChange}
        onInvalid={handleNewTodoInvalid}
      />
      <button>Criar <PlusCircle size={20} weight="bold" /></button>
    </form>
  )
}