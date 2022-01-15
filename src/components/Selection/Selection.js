import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const Selection = ({selectedNumber}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container.text}>Your number is {selectedNumber}</Text>
    </View>
  );
};

export default Selection;
