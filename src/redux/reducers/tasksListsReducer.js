
const CREATE_TASK_LIST = 'CREATE_TASK_LIST'

const initialState = {
taskLists: []
}


const tasksListsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE_TASK_LIST:
            return {...state, taskLists:  [...state.taskLists, action.payload]}
        default:
            return state
    }
}
export default tasksListsReducer


export const createTaskList = payload => ({type: CREATE_TASK_LIST, payload})