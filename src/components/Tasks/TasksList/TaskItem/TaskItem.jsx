import { useParams } from 'react-router-dom'
import s from './TaskItem.module.scss'

const TaskItem = props => {

  const param = useParams()['*']
  const handleChange = () => {
    props.toggleCompleted(param, props.nn, !props.completed)
  }
  return (
            <div className={props.little ? s.little : s.taskItem}>
              <label>
                <input type="checkbox" 
                  checked={props.completed} 
                  disabled ={props.little} 
                  onChange={ handleChange} 
                  // value={props.completed}
                  />
                <div className={props.completed ? s.completed : undefined}>{props.name}</div>
              </label>
              <p>{props.date}</p>
            </div>
  )
}

export default TaskItem
