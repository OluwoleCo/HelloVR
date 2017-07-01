import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class Title extends React.Component {
  render() {
    return (
      <View>
  <Text
    style={{
      fontSize: 0.2,
      textAlign: 'center',
      color: "#CF3C7E"
    }}
  > {this.props.title}
  </Text>
</View>
    )
  }
}
