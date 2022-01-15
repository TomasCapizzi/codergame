import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: theme.color2,
    padding: 15,
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    text: {
      fontSize: 30,
      color: theme.fontColor,
      fontFamily: 'Pacifico-Regular'
    },
  },
});

export default styles;
