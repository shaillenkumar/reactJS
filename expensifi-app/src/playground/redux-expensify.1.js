import { createStore, combineReducers } from "redux";

//default state of expenses reducer
const expensesReducerDefaultState = [];
// expense reducer
const expenseReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type) {
        default:
        return state;
    }
};


// default state of Filter Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startBy: undefined,
    endDate: undefined   
};
// filter reducer
const filterReducer = (state = filterReducerDefaultState , action) => {
    switch(action.type) {
        default:
        return state;
    }
};

// Create Store - call CombineReducer for multiple Reducers
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

console.log(store.getState());


const domoState = {
    expenses: [{
        id: 'xyz123',
        description: 'description1234',
        note: 'note123',
        amount: '12345.90',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startBy: undefined,
        endDate: undefined
    }
};