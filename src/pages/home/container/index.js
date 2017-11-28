import React,{Component} from 'react'
import {View,Text} from 'react-native'
import {bindActionCreators} from 'redux'
import getRequest from "../../../common/axios/index";



class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:{}
        }
    }
    componentWillMount(){
        getRequest('goods').then(res => {
            alert('success');
            this.setState({
                data:res.data.data
            })
        }).catch(error => {
            alert('fff')
        })
    }
    render(){
        return(
            <View>
                <Text>
                    this is homepages
                </Text>
                {Object.assign([],this.state.data).map(i => (
                    <View key={i.id}>
                        <Text>{i.id}</Text>
                    </View>
                ))}
            </View>
        )
    }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default HomePage;