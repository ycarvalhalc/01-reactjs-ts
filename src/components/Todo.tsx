import { Trash } from "phosphor-react";

import { TaskInteface } from "../types/task"

import checkedIcon from '../assets/checked-icon.svg'
import clipboardIcon from '../assets/clipboard-icon.svg'

import  styles from './Todo.module.css'

interface TodoProps {
  todo: TaskInteface[] | [],
  updateTask: (id: string) => void
  deleteTask: (id: string) => void
}

export function Todo({ todo, updateTask, deleteTask }: TodoProps) {
  const createdTasks = todo.filter(task => task.checked)
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <strong className={styles.created}>Tarefas criadas<span>{todo.length}</span></strong>
        <strong className={styles.done}>Concluídas<span>
          {todo.length == 0 ? "0" : `${createdTasks.length} de ${todo.length}`} 
        </span></strong>
      </header>

      <div className={styles.todo}>
        { todo.length > 0 
          ? (
            <ul className={styles.list}>
              {todo.map((task: TaskInteface) => (
                <li 
                  key={task.id} 
                  className={task.checked ? `${styles.item} ${styles.checked}` : styles.item}
                >
                  <span onClick={() => updateTask(task.id)}>
                    <img src={checkedIcon} alt="Ícone checado" />
                  </span>
                  <p>{task.content}</p>
                  <button onClick={() => deleteTask(task.id)}>
                    <Trash size={24} />
                  </button>
                </li>
              ))}
            </ul>
          )
          : (
            <div className={styles.empty}>
              <img src={clipboardIcon} alt="Ícone clipboard" />
              <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          )
        }
      </div>
    </div>
  )
}