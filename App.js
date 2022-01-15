import React, {useState} from 'react';

import GameScreen from './src/components/GameScreen/GameScreen';
import Navbar from './src/components/Navbar/Navbar';
import {SafeAreaView} from 'react-native';
import StartScreen from './src/components/StartScreen/StartScreen';
import styles from './src/styles';

const App = () => {
  const [gameOn, setGameOn] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      {gameOn ? (
        <GameScreen
          setGameOn={setGameOn}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
        />
      ) : (
        <StartScreen
          setGameOn={setGameOn}
          setSelectedNumber={setSelectedNumber}
          selectedNumber={selectedNumber}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
