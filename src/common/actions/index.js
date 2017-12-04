import {connect} from 'redux'

import {TEST} from "../constants";

const TestAction = (data) => {
    return{
        type:TEST,
        data:data
    }
};


const mapStateToProps = state => {
    return {
        userinfo:state.LoginInfoReducer,
    }
};

export default {TestAction}