import {combineReducers} from 'redux';


import testReducer from './index'
import DataTestreducer from '../../pages/test/reducers/index'
import LoginInfoReducer from '../../pages/login/reducers/index'


const rootReducer = combineReducers({
    testReducer,
    DataTestreducer,
    LoginInfoReducer,
});

export default rootReducer;