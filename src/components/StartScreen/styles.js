import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    marginVertical: 15,
    backgroundColor: theme.color1,
    padding: 8,
    borderRadius: 5,
    marginVertical: 45,
    textBtn: {
      fontSize: 20,
      color: theme.color3,
      fontFamily: 'Pacifico-Regular',
    },
  },
  text: {
    margin: 20,
    color: theme.color2,
    fontSize: 20,
    fontFamily: 'Cabin-Bold',
  },
});

export default styles;
