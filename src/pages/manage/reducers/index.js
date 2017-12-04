

import {GETUSERINFO} from "../constants/index";

const GetUserinfoReducer =  (state={userinfo:{}}, action) => {
    switch (action.type) {
        case GETUSERINFO:
            return {...state,userinfo:action.data};
        default:
            return state
    }
};

export default GetUserinfoReducer;