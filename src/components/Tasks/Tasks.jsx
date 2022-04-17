import { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './Tasks.module.scss'
import TaskList from './TasksList/TaskList'



const Tasks = props => {

  const param = +useParams()['*']
  const list = props.lists.filter(i => i.id === param)[0]
  const [text, setText] = useState('')
const handleClick = () => {
  props.addTodo(param, text)
  setText('')
}
  return (
        <main className={s.tasks}>
          <header>
            <div className={s.headerContainer}>
              <h1>{list.name}</h1>
              <p>2 из 7</p>
            </div>
          </header>
         <TaskList todos={list.todos}/>
         
          <footer className={s.footer}>
            <input value={text} onChange={(e) => setText(e.target.value)} tabIndex={0}/>
            <button onClick={handleClick}>+</button>
          </footer>
          
        </main>
  )
}

export default Tasks
