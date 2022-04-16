import TaskItem from '../../../Tasks/TasksList/TaskItem/TaskItem'
import s from './KaruselItem.module.scss'

const KaruselItem = props => {
  return (
      <div className={s.karuselItem}>
        <header>
          <h2>Название</h2>
        </header>
        <section>
          <TaskItem little={true}/>
          <TaskItem little={true}/>
          <TaskItem little={true}/>
          <TaskItem little={true}/>
          <TaskItem little={true}/>
        </section>
        
        
      </div>
  )
}

export default KaruselItem
