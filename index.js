import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import Counter from './Counter';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

async function asyncCall(dispatch) {
  console.log('calling');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('done');
  dispatch({ type: 'INCREMENT' });
}

const store = createStore(reducer);

const App = () => {
  const [value, setValue] = useState({ value: 0 });

  const stateHandler = () => {
    setValue({
      value: store.getState().value,
    });
  };
  store.subscribe(stateHandler);
  return (
    <Provider store={store}>
      <Counter
        value={value.value}
        increment={() => store.dispatch({ type: 'INCREMENT' })}
        decrement={() => store.dispatch({ type: 'DECREMENT' })}
        incrementByAsync={() => asyncCall(store.dispatch)}
        incrementIfOdd={() => {
          if (value.value % 2 === 1) store.dispatch({ type: 'INCREMENT' });
        }}
      />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
