import React from 'react'
import {TabNavigator,StackNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/FontAwesome'

import HomePage from "../../pages/home/container/index";
import Goods from "../../pages/goods/container/index";
import Manage from "../../pages/manage/container/index";
import Login from "../../pages/login/containers/login";
import LogIn from '../../pages/login/containers/index';
import Regist from '../../pages/login/containers/regist';

//个人中心导航
const Logins = StackNavigator({
    Manages: {
        screen: Manage ,
        navigationOptions:{
            title:'个人中心',
            headerBackTitle:'个人中心',
        },
    },
    Chats: {
        screen: Login,
        navigationOptions:{
            // title:'登陆',
        }
    },
    Reg:{
        screen:Regist,
        navigationOptions:{
            title:'注册',
        }
    }
});

//底部导航
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
        },
    }
});


export default HomeNav