import React, { useReducer } from 'react';

const initState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'inc':
      return { count: state.count + 1 };
    case 'dec':
      return { count: state.count - 1 };
    case 'reset':
    default:
      return initState;
  }
}
export default function Calc() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <p>
        the number is :

        {state.count}
      </p>
      <button type="button" onClick={() => dispatch({ type: 'inc' })}> +1 </button>
      <button type="button" onClick={() => dispatch({ type: 'dec' })}> -1 </button>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}> reset </button>
    </div>
  );
}
