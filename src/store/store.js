import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
// looger let's you see what the state is before duting and after 
import { rootReducer } from './root-reducer';

const middleWares = [logger]
// runs helper function before the actions hits reducer aka middleman 

const composedEnhancers = compose(applyMiddleware(...middleWares)); // compose allows to pass multiple functions left to right 
//pass eveysigle middleware you have
export const store = createStore(rootReducer, undefined, composedEnhancers)