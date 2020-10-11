import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions, Text} from 'react-native';

const MyButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.containerButton}
      onPress={props.onPress}
      onLongPress={props.onLongPress}>
      <Text style={styles.Text}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};
export {MyButton};

const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: '#90a4ae',
    padding: 20,
    margin: 10,
    width: Dimensions.get('window').width / 2,
    borderRadius: 10,
    alignSelf: 'center',
  },
  Text: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
