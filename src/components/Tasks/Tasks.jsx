import { useState } from 'react'
import { useParams } from 'react-router-dom'
import s from './Tasks.module.scss'
import TaskList from './TasksList/TaskList'

const Tasks = props => {

  const param = useParams()['*']
  const [text, setText] = useState('')
  const handleClick = () => {
    if(text) {
      props.addTodo(param, text)
      setText('')
    }
  }

  return (
        <main className={s.tasks}>
          <header>
            <div className={s.headerContainer}>
              <h1>{param}</h1>
              <p>2 из 7</p>
            </div>
          </header>
         <TaskList todos={props.lists[param]}/>
         
          <footer className={s.footer}>
            <input value={text} onChange={(e) => setText(e.target.value)} tabIndex={0}/>
            <button onClick={handleClick}>+</button>
          </footer>
          
        </main>
  )
}

export default Tasks
