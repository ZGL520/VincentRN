import React,{Component} from 'react'
import {View,Text} from 'react-native'



class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            userdata:{}
        }
    }
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