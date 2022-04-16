import s from './Tasks.module.scss'
import TaskList from './TasksList/TaskList'

const Tasks = props => {
  return (
        <main className={s.tasks}>
          <header>
            <div className={s.headerContainer}>
              <h1>Задания</h1>
              <p>2 из 7</p>
            </div>
          </header>
         <TaskList/>
         
          <footer className={s.footer}>
            <textarea />
            <button>+</button>
          </footer>
          
        </main>
  )
}

export default Tasks
