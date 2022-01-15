import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import BetButtons from '../BetButtons/BetButtons';
import Results from '../Results/Results';
import Selection from '../Selection/Selection';
import styles from './styles';

const gameOverImg = require('../../../assets/images/gameOver.png');
const GameScreen = ({setGameOn, setSelectedNumber, selectedNumber}) => {
  const [result, setResult] = useState('');
  const [moves, setMoves] = useState(0);
  const [lifes, setLifes] = useState(3);

  function randomNumber(condition) {
    const gameNumber = Math.floor(Math.random() * 100);
    if (condition) {
      if (gameNumber > selectedNumber) {
        setResult('wright');
        setMoves(moves + 1);
      } else {
        setResult('wrong');
        setLifes(lifes - 1);
      }
      //gameNumber > selectedNumber ? {} : setResult('wrong');
    } else {
      if (gameNumber < selectedNumber) {
        setResult('wright');
        setMoves(moves + 1);
      } else {
        setResult('wrong');
        setLifes(lifes - 1);
      }
      //gameNumber < selectedNumber ? setResult('wright') : setResult('wrong');
    }
    setSelectedNumber(gameNumber);
  }

  function higherBet() {
    randomNumber(true);
  }

  function lowerBet() {
    randomNumber(false);
  }

  function endGame() {
    setSelectedNumber(undefined);
    setGameOn(false);
  }
  return (
    <View style={styles.container}>
      {lifes > 0 ? (
        <>
          <Selection selectedNumber={selectedNumber} />
          <BetButtons lowerBet={lowerBet} higherBet={higherBet} />
        </>
      ) : (
        <Image source={gameOverImg} style={styles.img} />
      )}

      <Results result={result} lifes={lifes} />
      <Text style={styles.text}>Score: {moves}</Text>
      <TouchableOpacity style={styles.button} onPress={endGame}>
        <Text style={styles.button.text}>Quit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameScreen;
