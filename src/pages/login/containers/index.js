// 'use strict';

import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


import useraction from '../actions';
import Login from './login'
import Regist from './regist'
import Button from "../../../common/components/button";



//登陆输入组件
class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentWillMount(){
        console.log(this.props.navigation)
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Login/>
                <Button
                    onPress={() => navigate('Login')}
                />
                <Button
                    onPress={() => navigate('Regist')}
                />
                <Regist/>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        userinfo:state.LoginInfoReducer,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        userinfoactin:bindActionCreators(useraction,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LogIn)