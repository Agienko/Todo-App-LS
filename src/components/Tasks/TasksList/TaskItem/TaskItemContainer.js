import { connect } from "react-redux"
import { toggleCompleted } from "../../../../redux/reducers/tasksListsReducer"
import TaskItem from "./TaskItem"

// const mapStateToProps = state => ({lists: state.tasksLists.lists})

const TasksItemContainer = connect(null, {toggleCompleted})(TaskItem)

export default TasksItemContainer
