const CREATE_TASK_LIST = 'CREATE_TASK_LIST';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';

const initialState = {
  'Новый список 5': [
    { id: 1, name: 'Купить макароны', completed: false, date: '17.04.2022, 05:11:00' },
    { id: 2, name: 'Купить сыр', completed: false, date: '14.04.2022, 05:11:00' },
  ],
  'Новый список 2': [
    { id: 1, name: 'Ловить рыбу', completed: true, date: '17.01.2022, 05:11:00' },
    { id: 2, name: 'Забрать телефон', completed: false, date: '15.04.2022, 05:11:00' },
  ],
};

const tasksListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK_LIST:
      let [name, names] = [{}, Object.keys(state)];
      for (let i = 1; ; i++) {
        if (!names.includes(`Новый список ${i}`)) {
          name[`Новый список ${i}`] = [];
          break;
        }
      }
      return { ...state, ...name };
    case ADD_TODO:
      let newTodo = {};
      newTodo[action.name] = [
        ...state[action.name],
        { id: Date.now(), name: action.text, completed: false, date: new Date().toLocaleString() },
      ];
      return { ...state, ...newTodo };
    case TOGGLE_COMPLETED:
      state[action.id][action.idTodos] = {
        ...state[action.id][action.idTodos],
        completed: action.value,
      };

      return { ...JSON.parse(JSON.stringify(state)) };
    default:
      return state;
  }
};
export default tasksListsReducer;

export const createTaskList = () => ({ type: CREATE_TASK_LIST });
export const addTodo = (name, text) => ({ type: ADD_TODO, name, text });
export const toggleCompleted = (id, idTodos, value) => ({
  type: TOGGLE_COMPLETED, id, idTodos, value});
