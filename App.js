import React from 'react';
import { View,Text } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/common/store/configureStore';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{flex:1,marginTop:50}}>
                <Text>hello.zgl!!!</Text>
            </View>
        </Provider>
    );
  }
}