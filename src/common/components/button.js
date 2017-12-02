import React,{Component} from 'react'
import {TouchableOpacity,Text} from 'react-native'
//button
class Button extends Component{
    render(){
        {/*
        style:按钮样式
        testStyle:按钮内文本演示
        onPress:点击按钮触发函数
        placeholder:按钮文本
        */}
        const {style,textStyle,onPress,placeholder,} = this.props;
        return(
            <TouchableOpacity style={[styles.button,style]} onPress={onPress} value={'确定啊'}>
                <Text style={[styles.text,textStyle]}>{placeholder?placeholder:'提交'}</Text>
            </TouchableOpacity>
        )
    }
}

// 默认样式
const styles = {
    // 默认按钮样式
    button:{
        width:100,
        height:40,
        borderRadius:20,
        backgroundColor:'green',
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
    },
    // 默认按钮文本样式
    text:{
        padding:0,
        borderRadius:20,
        lineHeight:40,
        justifyContent:'center',
    }
};

export default Button