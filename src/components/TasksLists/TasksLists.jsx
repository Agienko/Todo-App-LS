import Karusel from './Karusel/Karusel';
import s from './TasksLists.module.scss'

const TasksLists = props => {
  return (
        <main className={s.main}>
          <hr />
          <h1>Списки <span>Заданий</span></h1>
            <button className={s.addListBtn} onClick={()=> console.log('создать список')}>+</button>
            <p>Добавить Список</p>
          <Karusel/>
        </main>
  )
}

export default TasksLists;
