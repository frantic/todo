const initialState = [];

export function todos(state = initialState, action) {
  if (action.type === 'CHECK') {
    return state.map(item => {
      if (item.title === action.title) {
        return {...item, done: !item.done};
      } else {
        return item;
      }
    });
  }
  return state;
}
