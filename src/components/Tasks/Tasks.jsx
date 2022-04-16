import s from './Tasks.module.scss'

const Tasks = props => {
  return (
        <div className={s.tasks}>
          <header>
            <h1>Задания</h1>
            <div>ending...</div>
          </header>
          <div>
            todos
          </div>
          <div>
            <button>+</button>
          </div>
          
        </div>
  )
}

export default Tasks
