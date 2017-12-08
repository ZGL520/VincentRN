import React from 'react'
import {TabNavigator,StackNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/FontAwesome'

import HomePage from "../../pages/home/container/index";
import Goods from "../../pages/goods/container/index";
import Manage from "../../pages/manage/container/index";
import Login from "../../pages/login/containers/login";
import LogIn from '../../pages/login/containers/index';
import Regist from '../../pages/login/containers/regist';

const LoginorRegist = StackNavigator({
   Login:{
       screen:Login,
       navigationOptions:{
           header:null,
       }
   },
    Regist:{
       screen:Regist
    }
});

const Logins = StackNavigator({
    Manages: {
        screen: Manage ,
        navigationOptions:{
            title:'个人中心',
        },
    },
    Chats: {
        screen: LoginorRegist,
        // tabBarPosition:'top',
        navigationOptions:{
            title:'登陆',
        }
    },
});



const Userinfo = StackNavigator({
    Userinfo:{
        screen:Manage,
    }
});



const HomeNav = TabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            // drawerLabel:'首页',
            tabBarIcon:({tintColor}) => (
                <MaterialIcons
                    name="home"
                    size={32}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Goods:{
        screen:Goods,
        navigationOptions:{
            drawerLabel:'商品',
            tabBarIcon:({tintColor}) => (
                <MaterialIcons
                    name="th-large"
                    size={32}
                    style={{color:tintColor}}
                />
            )
        }
    },
    Manage:{
        screen:Logins,
        navigationOptions:{
            drawerLabel:'个人',
            tabBarIcon:({tintColor}) => (
                <MaterialIcons
                    name="user-o"
                    size={32}
                    style={{color:tintColor}}
                />
            )
        }
    }
});


export default HomeNav