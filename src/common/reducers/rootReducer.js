import {combineReducers} from 'redux';


import TestReducer from './index'
import DataTestreducer from '../../pages/test/reducers/index'
import LoginInfoReducer from '../../pages/login/reducers/index'
import GetUserinfoReducer from '../../pages/manage/reducers/index'


const rootReducer = combineReducers({
    TestReducer,
    DataTestreducer,
    LoginInfoReducer,
    GetUserinfoReducer,
});

export default rootReducer;