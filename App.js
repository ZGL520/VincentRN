import React from 'react';
import { View,AppRegistry,AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import Storage from 'react-native-storage'

import configureStore from './src/common/store/configureStore';
import HomeNav from './src/common/nav/home'

const store = configureStore();
const storage = new Storage({
    size:1000,
    storageBackend:AsyncStorage,
    defaultExpires:1000*3600*24,
    enableCache:true,
});

global.storage = storage;

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{flex:1,marginTop:20}}>
                <HomeNav/>
            </View>
        </Provider>
    );
  }
}

