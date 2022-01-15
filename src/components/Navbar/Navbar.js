import {Text, View} from 'react-native';

import React from 'react';
import styles from './styles';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbar.text}>Coder Game</Text>
    </View>
  );
};

export default Navbar;
