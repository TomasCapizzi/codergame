import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './styles';

const BetButtons = ({lowerBet, higherBet}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttons} onPress={lowerBet}>
        <Text style={styles.buttons.text}>Menor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={higherBet}>
        <Text style={styles.buttons.text}>Mayor</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BetButtons;
