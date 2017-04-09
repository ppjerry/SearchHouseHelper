/**
 * 头部组件 中间文字,左边返回,右边自定义事件
 * @author: UncleYee
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HeaderTab extends React.Component {
  static propTypes = {
    title: React.PropTypes.string, // 中间的文字
    right: React.PropTypes.string, // 右边按钮 如果不传则不显示
    rightFunc: React.PropTypes.func,
    navigator: React.PropTypes.object.isRequired, // 上级的 navigator 用于返回按钮的事件
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  back = () => {
    /**
     * 由于有的页面上会打开键盘 返回上一页的时候会导致先跳回上一页再关闭键盘
     * 导致很差的交互 因此在这里主动调用关闭键盘的方法
     */
    const dismissKeyboard = require('dismissKeyboard');
    dismissKeyboard();

    const navigator = this.props.navigator;
    if (navigator) {
      navigator.pop();
    }
  }

  render() {
    const {title, right} = this.props || {};
    return (
      <View style={styles.root}>
        <View style={styles.rowTop}></View>
        <View style={styles.rowNext}>
          <TouchableOpacity
            onPress={this.back}
            activeOpacity={0.7}
            style={styles.left}
            >
            <Icon
              name='ios-arrow-back'
              size={27}
              color="#fff"
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
          <View style={styles.center}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.right}>
            {right &&
              <Text style={styles.text} onPress={this.props.rightFunc}>{right}</Text>
            }
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  root: {
    width: '100%',
    height: '9%',
    backgroundColor: '#C8E9E9',
    alignItems: 'center'
  },
  rowTop: {
    flex: 1,
  },
  rowNext: {
    flex: 2,
    flexDirection: 'row'
  },
  left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '800',
  }
}
