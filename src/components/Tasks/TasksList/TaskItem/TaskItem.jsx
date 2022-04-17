import s from './TaskItem.module.scss'

const TaskItem = props => {
  console.log(props)
  return (
            <div className={props.little ? s.little : s.taskItem}>
              <label>
                <input type="checkbox" checked={props.completed} disabled ={props.little}/>
                <div className={props.completed ? s.completed : undefined}>{props.name}</div>
              </label>
              <p>Date</p>
            </div>
  )
}

export default TaskItem
