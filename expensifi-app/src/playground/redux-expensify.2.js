import { createStore, combineReducers } from "redux";
import uuid from 'uuid';

// Sequence :  Dipatch Action store.dispatch -> Generate Action -> Call appropriate Reducer TYPE/Case for the Action


//ADD EXPENSE
const addExpense = ({ description='', note='', amount=0, createdAt=0} = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
  });
  
  // SORT_BY_AMOUNT
  const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
  });
  
  // SET_START_DATE
  const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });



//default state of expenses reducer
const expensesReducerDefaultState = [];
// expense reducer
const expenseReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
           // return state.concat(action.expense);  // using concat instead of array push because the arr should not be mutated and concat returns copy of another array.
           return [...state, action.expense] ;   // Array Spread operator -> names=['Jim','Tom']; [...names, 'Mike']
        case 'REMOVE_EXPENSE':
           return state.filter(({id}) =>  id !== action.id);   // state.filter will return a new array
               //return id != action.id;
        case 'EDIT_EXPENSE':   
            return state.map((expense) => {
                console.log("--expense-<>",expense.id);
                console.log("--action -<>",action.id);
                if(expense.id === action.id){
                    console.log("---<>",expense.id);
                    return { ...expense, ...action.updates } ;// object spread to update
                }else{
                    return expense;
                }
            });
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
        case 'SET_TEXT_FILTER' :
            return {...state , text: action.text};
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
            sortBy: 'amount'
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        default:
            return state;
    }
};

// Create Store - call CombineReducer for multiple Reducers
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));




const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 1000}));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 10})); 
console.log('->',expense1);
store.dispatch(editExpense(expense1.expense.id,{amount: 550}))
console.log('->',expense1);
store.dispatch(removeExpense({id: expense2.expense.id})); 



store.dispatch(setTextFilter('rentrent'));
store.dispatch(setStartDate(125)); // startDate 125
store.dispatch(setStartDate()); // startDate undefined
store.dispatch(setEndDate(1250)); // endDate 1250

//store.dispatch(setTextFilter());
console.log(store.getState());
store.subscribe(()=> {
    console.log(store.getState());
});

// --- To demonstrate Object Spread -------
const user = {
    name: 'Jen',
    age: 25
}
console.log({
    ...user, location: 'philadelphia' ,age: 32        
     // creates a new object which is a clone of user and add new property - similar to array spread
     // override age
})
// ----------------------------------------

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