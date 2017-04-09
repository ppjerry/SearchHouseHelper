/**
 * 按钮组件
 * @author: UncleYee 
 */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const styles = {
  btnStyle: {
    backgroundColor: '#87CEEB',
    borderColor: '#87CEEB',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },
  textStyle: {
    alignSelf: 'center'
  }
}

export default class Button extends React.Component {
  static propTypes = {
    title: React.PropTypes.string, // 按钮上显示的文字
    style: React.PropTypes.object, // 按钮的样式,只需要定义 flex height border padding 
    onPress: React.PropTypes.func, // 按下的响应事件
    fontStyle: React.PropTypes.object, // 字体 只需定义颜色 大小
  };

  static defaultProps = {
    title: 'Button'
  }

  render() {
    const {title, style, onPress, fontStyle, underlayColor} = this.props || {};
    return (
      <TouchableOpacity
        style={[style, styles.btnStyle]}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <Text style={[fontStyle, styles.textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
