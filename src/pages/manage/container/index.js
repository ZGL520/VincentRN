import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'



import Button from "../../../common/components/button";
import Login from '../../login/containers/login'


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
        });
        console.log(this.props.navigate)
    }

    //  logoinnav = StackNavigator({
    //     Logi:{
    //         screen:Login,
    //     }
    // });

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View style={{marginTop:10}}>
                <View
                    style={{width:'80%',marginLeft:'10%',borderColor:'grey',alignItems:'center',flexDirection:'row',borderWidth:1,justifyContent:'space-around'}}
                >
                    <Image
                        style={{borderRadius:25,width:50,height:50}}
                        source={require('../../../common/static/image/pic.jpg')}
                    />
                    <Text
                        onPress={() => navigate('Chats')}
                    >
                        立即登陆
                    </Text>
                </View>
                {/*<View style={{margin:20}}>*/}
                    {/*<Button*/}
                         {/**/}
                    {/*/>*/}
                {/*</View>*/}

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