

import {GETUSERINFO} from "../constants/index";

const GetUserinfo = data => {
    return{
        type:GETUSERINFO,
        data:data,
    }
};

export default {GetUserinfo}