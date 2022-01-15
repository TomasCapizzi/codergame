import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const Results = ({result, lifes}) => {
  return (
    <View>
      {result !== '' && (
        <Text style={styles.text}>
          Your choice was {result}. You have {lifes} left
        </Text>
      )}
    </View>
  );
};

export default Results;
