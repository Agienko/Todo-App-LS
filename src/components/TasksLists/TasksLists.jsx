import KaruselContainer from './Karusel/KaruselContainer';
import s from './TasksLists.module.scss'

const TasksLists = props => {
  
  return (
        <main className={s.main}>
          <hr />
          <h1>Списки <span>Заданий</span></h1>
            <button className={s.addListBtn} onClick={()=> props.createTaskList()}>+</button>
            <p>Добавить Список</p>
          <KaruselContainer/>
        </main>
  )
}

export default TasksLists
