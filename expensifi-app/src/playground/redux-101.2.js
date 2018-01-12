import { createStore } from 'redux';


//Action generators - functions that can return action object.
/*
const incrementCount = (payload = {}) => ({
    type: 'INCREMENT',
    incrementBy: typeof payload.incrementBy == 'number'? payload.incrementBy : 1
});
*/ // Can be written as {} in arg as object destructuring. with default value =1 if no value is passed.
const incrementCount = ({incrementBy = 1}) => ({
    type: 'INCREMENT',
    //incrementBy: typeof payload.incrementBy == 'number'? payload.incrementBy : 1
    //incrementBy: incrementBy
    incrementBy
});


// demonstrate destructure object - consider add() passing an object
const add = (data) => {
    return data.a + data.b;
};
//can be written as object destructurin as 
const add2 = ({a, b}) => {
    return a + b;   
};
console.log(add2({ a: 1, b: 2 }));
//-----

const store = createStore((state = { count : 0 },action) => {
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

store.subscribe(() => {
    console.log(store.getState());
});

/* 
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 10
});
*/
store.dispatch(incrementCount());
store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch({
    type: 'RESET'
});
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});
store.dispatch({
    type: 'SET',
    count: 101
});
