import {Text, TouchableOpacity, View} from 'react-native';

import Card from '../Card/Card';
import React from 'react';
import Selection from '../Selection/Selection';
import styles from './styles';

const StartScreen = ({setGameOn, setSelectedNumber, selectedNumber}) => {
  function startGame() {
    selectedNumber ? setGameOn(true) : console.warn('Choose a number to start');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a number!</Text>
      <Card
        setSelectedNumber={setSelectedNumber}
        selectedNumber={selectedNumber}
      />
      {selectedNumber && <Selection selectedNumber={selectedNumber} />}
      <TouchableOpacity style={styles.button} onPress={startGame}>
        <Text style={styles.button.textBtn}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
