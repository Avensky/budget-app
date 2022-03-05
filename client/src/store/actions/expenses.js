import axios from 'axios'
import * as actionTypes from './actionTypes'

/*********************************************************
 * Get Expenses
**********************************************************/
export const getExpensesSuccess = (expenses) => {
    return {
        type:  actionTypes.GET_EXPENSES_SUCCESS,
        expenses: expenses,
    }
}
export const getExpensesFail = (error) => {
    return {
        type:  actionTypes.GET_EXPENSES_FAIL, 
        error: error
    }
}
export const getExpensesStart = () => {
    return {
        type:  actionTypes.GET_EXPENSES_START,
        error: null,
        expenses: null
    }
}
export const getExpenses = () => {
    return dispatch => {
        dispatch(getExpensesStart());
        axios.get( '/api/getExpenses')
        .then( result => {
            const expenses = result.data
                dispatch(getExpensesSuccess(expenses));
        } )
        .catch( error => {
            dispatch(getExpensesFail(error));
        } )
    }
}

/*********************************************************
 * New Expense
**********************************************************/
export const newExpenseSuccess = (message) => {
    return {
        type:  actionTypes.NEW_EXPENSE_SUCCESS,
        message: message,
    }
}
export const newExpenseFail = (error) => {
    return {
        type:  actionTypes.NEW_EXPENSE_FAIL, 
        error: error
    }
}
export const newExpenseStart = () => {
    return {
        type:  actionTypes.NEW_EXPENSE_START,
        error: null,
        message: null
    }
}
export const newExpense = (values) => {
    return dispatch => {
        dispatch(newExpenseStart());
        axios.post( '/api/newExpense', values)
            .then( result => {
                console.log("newExpense values",values)
                dispatch(newExpenseSuccess(result.data));    
        })
            .catch( error => {
                dispatch(newExpenseFail(error));
        })
    }}