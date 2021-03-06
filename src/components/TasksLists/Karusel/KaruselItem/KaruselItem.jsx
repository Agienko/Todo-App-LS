import { Link } from 'react-router-dom'
import TaskItem from '../../../Tasks/TasksList/TaskItem/TaskItem'
import s from './KaruselItem.module.scss'

const KaruselItem = props => {
  const colorStyle = props.color ? {backgroundColor: '#582994'} : {backgroundColor: '#df6335'}
  return (
    <Link to={`/tasks/${props.id}`}>
    <div className={s.karuselItem} style={colorStyle} onClick={() => console.log(props)}>
        <header>
          <h2>{props.name}</h2>
        </header>
        <section>
          {props.todos.map(i => <TaskItem little={true} {...i} key={i.id}/>)}
        </section>
      </div>
    </Link>
      
  )
}

export default KaruselItem
