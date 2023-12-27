/* This Code has been create by: Randol */
const immutableReducer = (state = ['Do not mutate state!'], action) => {
    switch(action.type) {
      case 'ADD_TO_DO':
      let addtodo = [...state, action.todo]
        // Don't mutate state here or the tests will fail
        return addtodo
      default:
        return state;
    }
  };
  
  const addToDo = (todo) => {
    return {
      type: 'ADD_TO_DO',
      todo
    }
  }
  
  const store = Redux.createStore(immutableReducer);