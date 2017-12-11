import React,{Component} from 'react';
import {View,Text} from 'react-native'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


import useraction from "../actions";
import getuserinfo from "../../manage/actions"
import {AuthLogin} from "../../../common/axios";
import Button from '../../../common/components/button'
import Input from '../../../common/components/input'
import {AuthDetails} from "../../../common/axios/index";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    login = () => {
        //数据拼接
        const data = {
            email:this.props.userinfo.useremail,
            password:this.props.userinfo.userpassword
        };
        //请求登陆
        AuthLogin.post(data).then(res => {
            console.log(res.data);
            this.props.userinfoactin.UserDetail(res.data);
            this.props.userinfoactin.Logined();
            storage.save({
                key:'token',
                data:res.data.access_token,
                expires:1000*3600*24,
            });
            storage.load({
                key:'token',
            }).then(token => {
                AuthDetails.get(token).then(rest => {
                    this.props.getuserinfo.GetUserinfo(rest.data);
                }).catch(error => {
                    console.log(error)
                })
            });
        }).catch(error => {
            alert('登录失败');
        });
    };

    render(){
        const {navigate} = this.props.navigation;
        return(
            <View>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>email:</Text>
                    <Input action={this.props.userinfoactin.LoginUseremail} autoCapitalize='none' style={styles.input} secure={false} name='email' placeholder='email' clearButtonMode='while-editing'/>
                </View>
                <View style={styles.inputview}>
                    <Text style={styles.btnview}>password:</Text>
                    <Input action={this.props.userinfoactin.LoginUserpassword} autoCapitalize='none' style={styles.input} secure={true} name='password' placeholder='password' clearButtonMode='while-editing' secureTextEntry={true}/>
                </View>
                <View style={styles.btnviews}>
                    <Button
                        onPress = {this.login}
                        placeholder = {'登录'}
                        style={styles.button}
                        textStyle={styles.fontstyle}
                    />
                </View>
                <View>
                    <Text>没有账号？</Text>
                    <Text
                        onPress = {() => navigate('Reg')}
                    >注册</Text>
                </View>
            </View>
        )
    }
}


//LogIn样式
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
        userinfoactin:bindActionCreators(useraction,dispatch),
        getuserinfo:bindActionCreators(getuserinfo,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Login)