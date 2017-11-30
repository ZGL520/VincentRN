
import {
    LOGINED, LOGINFAILD, LOGINING, UNLOGIN, USERDETAIL, USEREMAIL, USERNAME, USERPASSWORD,
    USERPASSWORDCOMFIRM
} from "../constants/index";

const LoginUsername = data => {
    return{
        type:USERNAME,
        data:data
    }
};
const LoginUseremail = data => {
    return{
        type:USEREMAIL,
        data:data
    }
};
const LoginUserpassword = data => {
    return{
        type:USERPASSWORD,
        data:data
    }
};
const LoginUserpasswordcomfirm = data => {
    return{
        type:USERPASSWORDCOMFIRM,
        data:data
    }
};
const UnLogin = data => {
    return {
        type:UNLOGIN,
        data:data
    }
};
const Logining = data => {
    return {
        type:LOGINING,
        data:data
    }
};
const LoginFiald = data => {
    return {
        type:LOGINFAILD,
        data:data
    }
};
const Logined = data => {
    return {
        type:LOGINED,
        data:data
    }
};
const UserDetail = data => {
    return {
        type:USERDETAIL,
        data:data
    }
};

export default {
    LoginUsername,
    LoginUseremail,
    LoginUserpassword,
    LoginUserpasswordcomfirm,
    UnLogin,
    Logining,
    LoginFiald,
    Logined,
    UserDetail,
}