const initialState = { value: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('Increased value by 1');
      return { value: state.value + 1 };
    case 'DECREMENT':
      console.log('Decreased value by 1');
      return { value: state.value - 1 };
    default:
      return state;
  }
};

export default reducer;
