import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {connect} from 'react-redux'


import LogIn from '../../login/containers/index'

class Manage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginstatus:'',
        }
    }

    componentWillMount(){
        this.setState({
            loginstatus:this.props.loginstatu,
        })
    }

    render(){
        return(
            <View style={{flexWrap:"wrap"}}>
                <Text>
                    this is Manage
                </Text>
                <Text>
                    {this.props.loginstatu}
                </Text>
                <LogIn/>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return{
        loginstatu:state.LoginInfoReducer.loginstute
    }
};

export default connect(mapStateToProps)(Manage);