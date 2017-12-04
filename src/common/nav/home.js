import React,{Component,PropTypes} from 'react'
import {StackNavigator,TabNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/FontAwesome'

import HomePage from "../../pages/home/container/index";
import Goods from "../../pages/goods/container/index";
import Manage from "../../pages/manage/container/index";



const HomeNav = TabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            drawerLabel:'首页',
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
        screen:Manage,
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