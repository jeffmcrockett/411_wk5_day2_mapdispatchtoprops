import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';
import { Switch } from 'react-router';

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_CAR: 
            return [...state, action.value]
        case actionTypes.REMOVE_CAR:
            const newState = [...state]
            newState.splice(action.value, 1)
            return newState;
        default:
            return state
    }
}

export default combineReducers({ user, cars })