import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View
} from 'react-native';

import Home from '../Home/Home';

export default class Splash extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: Home,
          name: 'Home'
        });
      });
    }, 500);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const {height, width} = Dimensions.get('window');
    return (
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: width, height: height}}
            source={require('./splash-port-xhdpi.png')}
          />
        </View>
    );
  }
}
import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View
} from 'react-native';

import Home from '../Home/Home';

export default class Splash extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
    const {navigator} = this.props;
    this.timer = setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.resetTo({
          component: Home,
          name: 'Home'
        });
      });
    }, 500);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    const {height, width} = Dimensions.get('window');
    return (
        <View style={{flex: 1}}>
          <Image
            style={{flex: 1, width: width, height: height}}
            source={require('./splash-port-xhdpi.png')}
          />
        </View>
    );
  }
}
