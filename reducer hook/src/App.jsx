import React, { useReducer } from 'react';
import './App.css'
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
// import CounterOne from './components/CounterOne'
// import CounterThree from './components/CounterThree'
// import CounterTwo from './components/CounterTwo'

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//     switch(action) {
//         case 'increment':
//             return state + 1;
//         case 'decrement':
//             return state - 1;
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
    // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>

    Count - {count}
    <ComponentA />
    <ComponentB />
    <ComponentC />
    </CountContext.Provider> */}
    {/* <DataFetchingOne /> */}
    <DataFetchingTwo />
    </>
  )
}

export default App
