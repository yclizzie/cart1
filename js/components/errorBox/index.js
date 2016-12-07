
import React, { Component } from 'react';
import { Text } from 'native-base';
import styles from './styles';
import { View } from 'react-native';

class ErrorBox extends Component {

  static propTypes = {
    errors: React.PropTypes.arrayOf(React.PropTypes.string),
  }

  render() {
    let errors = this.props.errors;
    if (errors && errors.length > 0) {
      return (
      <View style={styles.box}>
      {errors.map((error, index) =>
        <Text key={index} style={styles.error}>
            {error}
        </Text>)}
      </View>

      );
    } else {
      return (
        <View></View>
      );
    }
  }


}


export default (ErrorBox);
