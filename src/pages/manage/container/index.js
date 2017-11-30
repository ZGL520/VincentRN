import React,{Component} from 'react'
import {View,Text} from 'react-native'


import LogIn from '../../login/containers/index'

class Manage extends Component{
    render(){
        return(
            <View style={{flexWrap:"wrap"}}>
                <Text>
                    this is Manage
                </Text>
                <LogIn/>
            </View>
        )
    }
}

export default Manage;