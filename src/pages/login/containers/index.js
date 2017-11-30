// 'use strict';

import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import useraction from '../actions';

//input组件
class UserInput extends Component{
    constructor(props){
        super(props);
        this.state = {
          username:'',
          email:'',
          password:'',
        };
        //定义样式
        this.style = {
            userform:{
                display:'flex',
                flexDirection:'row',
                width:'94%',
                marginLeft:'3%',
                marginTop:10
            },
            userinput:{
                borderColor: '#000000',
                borderWidth:1,
                width:'80%',
                height:24,
            },
            labal:{
                width:'20%',
                height:24,
            }
        }
    }
    render(){
        const {labal,placeholder} = this.props;
        return(
            <View  style={this.style.userform}>
                <Text style={this.style.labal}>{labal}:</Text>
                <TextInput
                    {...this.props}
                    style={this.style.userinput}
                    placeholder={placeholder}
                    onChangeText = {(text) => {this.props.action(text)}}
                />
            </View>
        )
    }
}



//登陆输入组件
class LogIn extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
        this.style = {
            button:{
                backgroundColor:'grey',
            }
        }
    }
    componentWillMount(){
        this.props.userinfoactin.LoginUsername('asdfasddfaf')
    }

    onPress = () => {
        alert('asdf')
    };

    render(){
        return(
            <View>
                <Text>
                    Login
                </Text>
                <View>
                    <UserInput action={this.props.userinfoactin.LoginUsername} labal='名字' secure={false} name='username' placeholder='username' clearButtonMode='while-editing'/>
                    <UserInput action={this.props.userinfoactin.LoginUseremail} labal='邮箱' secure={false} name='email' placeholder='email' clearButtonMode='while-editing'/>
                    <UserInput action={this.props.userinfoactin.LoginUserpassword} labal='密码' secure={true} name='password' placeholder='password' clearButtonMode='while-editing' secureTextEntry={true}/>
                    <UserInput action={this.props.userinfoactin.LoginUserpasswordcomfirm} labal='密码' secure={true} name='passwordcomfirm' placeholder='password-comfirm' clearButtonMode='while-editing' secureTextEntry={true}/>

                    <View style = {styles.btnview}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress = {this.onPress}
                        >
                            <Text style={{margin:0,lineHeight:40}}>提交</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

//LogIn样式
const styles = {
    btnview:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:10,
    },
    button:{
        width:100,
        height:40,
        borderRadius:20,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'center',
    }
}


const mapStateToProps = state => {
    return {
        userinfo:state.LoginInfoReducer.username,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        userinfoactin:bindActionCreators(useraction,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(LogIn)