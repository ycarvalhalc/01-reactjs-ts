import { useState } from "react"
import { Header } from "./components/Header"
import { TodoForm } from "./components/TodoForm"
import { Todo } from "./components/Todo"

import { TaskInteface } from "./types/task"

import styles from './App.module.css'

function App() {
  const [todo, setTodo] = useState<TaskInteface[] | []>([])
  
  function addTask(task: TaskInteface) {
    setTodo([...todo, task])
  }

  function updateTask(id: string) {
    const updatedTodo = todo.map((task) => {
      if (task.id === id) return {...task, checked: !task.checked }
      return task
    })

    setTodo(updatedTodo)
  }

  function deleteTask(id: string) {
    const updatedTodo = todo.filter((task) => task.id !== id)

    setTodo(updatedTodo)
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <TodoForm addTask={addTask} />
        <Todo todo={todo} updateTask={updateTask} deleteTask={deleteTask} />
      </div>
    </div>
  )
}

export default App
