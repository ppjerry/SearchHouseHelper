import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import Button from '../components/Button';

import MyHoney from './MyHoney';

export default class Home extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    navigator: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  jumpToMyHoney = () => {
    const navigator = this.props.navigator;
    if (navigator) {
      navigator.push({
        name: 'MyHoney',
        component: MyHoney
      });
    }
  }

  render() {
    return (
      <View style={styles.root}>
        <Image
          style={styles.bg}
          source={require('./images/rose2.jpeg')}
          >
          <View style={styles.info}>
            <Text style={styles.we}>We Are Together</Text>
            <Text style={styles.num}>555</Text>
            <Text style={styles.days}>Days</Text>
          </View>
          <View style={{width: '100%'}}>
            <Button
              style={styles.btn}
              title='I love you'
              onPress={this.jumpToMyHoney}
              fontStyle={styles.borrowFont}
            />
          </View>
        </Image>
      </View>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  bg: {
    width: '100%',
    height: '100%'
  },
  info: {
    alignItems: 'center',
    height: '85%'
  },
  we: {
    marginTop: '15%',
    fontSize: 22,
    color: '#3F692F'
  },
  num: {
    marginTop: '2%',
    fontSize: 38,
    color: '#EF7B64'
  },
  days: {
    marginTop: '2%',
    fontSize: 22,
    color: '#4F7D36'
  },
  btn: {
    height: 42,
    // flex: 1,
    marginBottom: 10,
    marginLeft: '28%',
    marginRight: '28%',
    justifyContent: 'center'
  },
  borrowFont: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
}