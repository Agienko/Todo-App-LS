import { connect } from "react-redux";

import { createTaskList } from '../../redux/reducers/tasksListsReducer'
import TasksLists from "./TasksLists";

const mapStateToProps = state => ({})

const TasksListsContainer = connect(null,{createTaskList})(TasksLists)

export default TasksListsContainer