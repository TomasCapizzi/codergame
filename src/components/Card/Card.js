import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import styles from './styles';
import theme from '../../utils/constants/theme';

const Card = ({setSelectedNumber, selectedNumber}) => {
  const [number, setNumber] = useState();

  function confirmNumber(value) {
    setSelectedNumber(value);
  }
  function resetNumber() {
    setSelectedNumber(undefined);
    setNumber(undefined);
  }
  return (
    <View style={styles.card}>
      <TextInput
        placeholder="number"
        placeholderTextColor={theme.color3}
        style={styles.text}
        keyboardType="numeric"
        maxLength={2}
        onChangeText={num => setNumber(num)}
        value={number}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.button} onPress={() => resetNumber()}>
          <Text style={styles.button.text}>Clean</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => confirmNumber(number)}>
          <Text style={styles.button.text}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
