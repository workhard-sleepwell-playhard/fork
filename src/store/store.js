import {compose, createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// looger let's you see what the state is before duting and after 
import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
    if (!action.type){
        return next(action);
    }
    // return from middleware nothing happens
    console.log('type:', action.type);
    console.log('payload:', action.payload);
    console.log('currentState:', store.getState());

    next(action); //pass along the action now 

    console.log('next state: ', store.getState()) // new state 
}
//currying function 
const middleWares = [loggerMiddleware]
// runs helper function before the actions hits reducer aka middleman 

const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose allows to pass multiple functions left to right 
//pass eveysigle middleware you have
export const store = createStore(rootReducer, undefined, composedEnhancers)