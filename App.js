import React from 'react';
import { View,AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './src/common/store/configureStore';
import HomeNav from './src/common/nav/home'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{flex:1,marginTop:50}}>
                <HomeNav/>
            </View>
        </Provider>
    );
  }
}

