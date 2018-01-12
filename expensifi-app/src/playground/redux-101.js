import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});
 const setCount = ({count}) => ({
     type: 'SET', 
     count
});

// The Below Function is called Reducer
// 1. Reducers are pure functions
// in pure functions output is determined by the input only. Doesnt take or change anything outside of fn scope
// 2. never change state or action (mutate) you must only read from those var
// 3. 


const countReducer = ((state = { count : 0 },action) => {
    switch (action.type) {
        case 'INCREMENT' : 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT' : 
            const decrememtBy = typeof action.decrementBy === 'number'? action.decrementBy : 1;
            return {
                count: state.count - decrememtBy
            };
        case 'SET' : 
            return {
                count: action.count
            };
        case 'RESET' : 
            return {
                count: 0
            };
        default : 
            return state;
    }
});
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 25}));
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 5}));
store.dispatch(setCount({count : 10}));
store.dispatch(resetCount());
