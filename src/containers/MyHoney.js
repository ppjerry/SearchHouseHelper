import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import HeaderTab from '../components/HeaderTab';

export default class MyHoney extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    navigator: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    const navigator = this.props.navigator;
    return (
      <View style={styles.root}>
        <HeaderTab
          title="我的宝宝(女神)"
          navigator={navigator}
        />
        <ScrollView style={{width: '100%'}}>
          <View style={{width: '100%'}}>
            <Image
              style={{width: '100%', height: 700}}
              source={require('./images/honey.jpg')}
            />
            <Image
              style={{width: '100%', height: 500}}
              source={require('./images/honey1.jpg')}
            />
            <Image
              style={{width: '100%', height: 500}}
              source={require('./images/we.jpeg')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#efeff4'
  }
}
