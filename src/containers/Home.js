import React from 'react';
import {
  View,
} from 'react-native';

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

  render() {
    return (
      <View style={styles.root}>
        123
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