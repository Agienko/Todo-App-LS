import s from './TasksLists.module.scss'

const TasksLists = props => {
  return (
        <main className={s.main}>
          <h1>Списки Заданий</h1>
          <div>
            <button>+</button>
            <p>Добавить Список</p>
          </div>
          <div className='carusel'>

          </div>
        </main>
  )
}

export default TasksLists;
