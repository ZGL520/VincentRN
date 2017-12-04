import React,{Component} from 'react'
import {View,Text} from 'react-native'



class User extends Component{
    render(){
        return(
            <View>
                <Text>
                    zgl
                </Text>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        userinfo:state.LoginInfoReducer.userdetail
    }
};

export default User