import React,{Component} from 'react';
import {View,Text,TextInput,} from 'react-native';
//input组件
class Input extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
        };
        //定义样式
        this.style = {
            input:{
                borderColor: '#000000',
                borderWidth:1,
                width:'80%',
                alignItems:'center',
                margin:10,
                height:24,
            },
        }
    }
    render(){
        // const {placeholder,style,} = this.props;
        return(
            <TextInput
                {...this.props}
                style={[this.style.input,this.props.style]}
                placeholder={this.props.placeholder}
                onChangeText = {(text) => {this.props.action(text)}}
            />
        )
    }
}

export default Input