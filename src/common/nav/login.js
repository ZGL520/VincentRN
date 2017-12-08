import React from 'react'
import {TabNavigator,StackNavigator} from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/FontAwesome'

import Login from "../../pages/login/containers/login"
import Regist from "../../pages/login/containers/regist"

const LoginNav = TabNavigator({
    Logins:{
        screen:Login,
        title:'asdfsaf',
    },

});


export default LoginNav