import {combineReducers} from 'redux';


import testReducer from './index'
import DataTestreducer from '../../pages/test/reducers/index'


const rootReducer = combineReducers({
    testReducer,
    DataTestreducer,
});



export default rootReducer;