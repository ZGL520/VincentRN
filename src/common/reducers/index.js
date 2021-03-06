import {TEST} from "../constants";
import {GETUSERINFO} from "../constants/index";

const TestReducer =  (state={test:'',userinfo:{}}, action) => {
    switch (action.type) {
        case TEST:
            return {...state,test:action.data};
        case GETUSERINFO:
            return {...state,userinfo:action.data};
        default:
            return state
    }
};

export default TestReducer;