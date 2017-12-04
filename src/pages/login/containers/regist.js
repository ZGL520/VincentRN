// 'use strict';

import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import useraction from '../actions';
import Button from '../../../common/components/button'
import Input from '../../../common/components/input'
import {AuthSignUp} from "../../../common/axios/index";




//登陆输入组件
class Regist extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    regist = () => {
        const data = {
            username:this.props.userinfo.username,
            email:this.props.userinfo.useremail,
            password:this.props.userinfo.userpassword,
            password_confirmation:this.props.userinfo.userpasswordcomfirm,
        };

        AuthSignUp.post(data).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        });

    };

    render(){
        return(
            <View>
                <Text>
                    Regist
                </Text>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>username:</Text>
                    <Input action={this.props.userinfoactin.LoginUsername} autoCapitalize='none' style={styles.input} secure={false} name='username' placeholder='username' clearButtonMode='while-editing'/>
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>email:</Text>
                    <Input action={this.props.userinfoactin.LoginUseremail} autoCapitalize='none' style={styles.input} secure={false} name='email' placeholder='email' clearButtonMode='while-editing'/>
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>password:</Text>
                    <Input action={this.props.userinfoactin.LoginUserpassword} autoCapitalize='none' style={styles.input} secure={true} name='password' placeholder='password' clearButtonMode='while-editing' secureTextEntry={true}/>
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>passwordcfm:</Text>
                    <Input action={this.props.userinfoactin.LoginUserpasswordcomfirm} autoCapitalize='none' style={styles.input} secure={true} name='passwordcomfirm' placeholder='password-comfirm' clearButtonMode='while-editing' secureTextEntry={true}/>
                </View>
                <View style={styles.btnviews}>
                    <Button
                        onPress = {this.regist}
                        style={styles.button}
                        textStyle={styles.fontstyle}
                        placeholder={'注册'}
                    />
                </View>
            </View>
        )
    }
}

//regist样式
const styles = {
    inputview:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        marginLeft:'10%',
    },
    btnview:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
        width:'30%',
    },
    btnviews:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    button:{
        width:200,
        height:40,
        borderRadius:20,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'center',
    },
    fontstyle:{
        color:'#ffffff',
        fontSize:20,
    },
    input:{
        width:'70%',
    }
};


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

export default connect(mapStateToProps,mapDispatchToProps)(Regist)