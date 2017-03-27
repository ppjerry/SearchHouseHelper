import React from 'react';
import {
  Navigator,
  View,
  StatusBar,
  Platform
} from 'react-native';

import Splash from './containers/Splash/Splash';

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent={true}
        />
        <Navigator
          initialRoute={{
            name: 'Splash',
            component: Splash
          }}
          configureScene={() => {
            return Navigator.SceneConfigs.PushFromRight
          }}
          renderScene={(route, navigator) => {
            const Component = route.component;
            return (
              <Component
                navigator={navigator}
                route={route}
                {...route.passProps}
              />
            )
          }}
        />
      </View>
    );
  }
}
