import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: theme.color2,
    fontSize: 22,
    fontFamily: 'Cabin-Bold'
  },
  button: {
    backgroundColor: theme.fontColor,
    borderRadius: 8,
    marginVertical: 25,
    text: {
      color: theme.backColor,
      padding: 8,
      fontSize:20
    },
  },
  img: {
    padding: 10,
    marginVertical: 15
  }
});

export default styles;