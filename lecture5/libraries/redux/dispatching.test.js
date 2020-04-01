//Code inspired by https://redux.js.org/basics/store#dispatching-actions
import {
    INCREMENT_COUNTER,
    SELECT_TECHNOLOGY,
    incrementCounter,
    selectTechnology
} from './actions';

import store from './store';

// Log the initial state
console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(selectTechnology('JavaScript'));
store.dispatch(incrementCounter());

store.dispatch(selectTechnology('Polymer'));
store.dispatch(incrementCounter());

store.dispatch(selectTechnology('JavaScript'));
store.dispatch(incrementCounter());

store.dispatch(selectTechnology('Redux'));
store.dispatch(incrementCounter());

// Stop listening to state updates
unsubscribe();