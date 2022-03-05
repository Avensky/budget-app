import * as actionTypes from '../actions/actionTypes';

const initialState = {
    expenses: null,
    loading: null,
    message: null,
    error: null,
};


/*******************************************************************************
 * Get Expenses
*******************************************************************************/
const getExpensesStart = (state, action ) => {
    return {
        ...state, 
        loading: true
    }
}

const getExpensesFail = (state, action ) => {
    return {
        ...state, 
        expenses:null,
        loading: false,
    }
}
const getExpensesSuccess = (state, action ) => {
    return {
        ...state, 
        expenses:action.expenses,
        loading: false,
    }
}

/*******************************************************************************
 * New Expense
*******************************************************************************/
const newExpenseStart = (state, action ) => {
    return {
        ...state, 
        loading: true
    }
}

const newExpenseFail = (state, action ) => {
    return {
        ...state, 
        error: action.error,
        loading: false,
    }
}
const newExpenseSuccess = (state, action ) => {
    return {
        ...state, 
        message: action.message,
        loading: false,
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionTypes.GET_EXPENSES_START             : return getExpensesStart(state, action);
        case actionTypes.GET_EXPENSES_FAIL              : return getExpensesFail(state, action);
        case actionTypes.GET_EXPENSES_SUCCESS           : return getExpensesSuccess(state, action);

        case actionTypes.NEW_EXPENSE_START              : return newExpenseStart(state, action);
        case actionTypes.NEW_EXPENSE_FAIL               : return newExpenseFail(state, action);
        case actionTypes.NEW_EXPENSE_SUCCESS            : return newExpenseSuccess(state, action);

        default: return state;    
    }
}

export default reducer;