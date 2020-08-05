import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers'
import { Provider } from 'react-redux';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// UNCOMMENT LATER
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// import { createStore } from 'redux';
// // Store is a globalised state that holds all of the data required for our app
// // Action describes what we want to do... A description of a process, but not the process itself
// // A function that returns an object
// const increment = () => {
//   return {
//     type: "INCREMENT",
//   }
// }

// const decrement = () => {
//   return {
//     type: "DECREMENT",
//   }
// }

// // Reducer: transform state into next state
// const counter = (state=0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//   }
// }

// // Can you create multiple stores???
// let store = createStore(counter);

// // Display in the console
// store.subscribe(() => {
//   console.log(store.getState());
// })
// // Action is called, reducer checks which action is called, and makes the appropriate changes to state
// // Dispatch sends action to the reducer for checking
// store.dispatch(increment());

