import {
    LOGINED,
    LOGINFAILD, LOGINING, UNLOGIN, USERDETAIL, USEREMAIL, USERNAME, USERPASSWORD,
    USERPASSWORDCOMFIRM
} from "../constants/index";

const init_state = {
    username:'',
    useremail:'',
    userpassword:'',
    userpasswordcomfirm:'',
    loginstute:'',
    userdetail:{},
};

const LoginInfoReducer = (state=init_state, action) => {
    switch(action.type){
        case USERNAME:
            return state = {...state,username:action.data};
        case USEREMAIL:
            return state = {...state,useremail:action.data};
        case USERPASSWORD:
            return state = {...state,userpassword:action.data};
        case USERPASSWORDCOMFIRM:
            return state = {...state,userpasswordcomfirm:action.data};
        case UNLOGIN:
            return state = {...state,loginstute:'unlogin'};
        case LOGINING:
            return state = {...state,loginstute:'logining'};
        case LOGINFAILD:
            return state = {...state,loginstute:'loginfaild'};
        case LOGINED:
            return state = {...state,loginstute:'logined'};
        case USERDETAIL:
            return state = {...state,userdetail:action.data};
        default:
            return state;
    }
};

export default LoginInfoReducer