import React from 'react'

import TasksItemContainer from './TaskItem/TaskItemContainer'
import s from './TaskList.module.scss'

const TaskList = (props) => {
  // console.log(todos)
  return (
          <div className={s.taskList}>
            {props.todos.map((item, nn) => 
              <TasksItemContainer key={item.id} nn={nn} id={item.id} name={item.name} date={item.date} completed={item.completed}/>)}
          </div>
  )
}

export default React.memo(TaskList) 
