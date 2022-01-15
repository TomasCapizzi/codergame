import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.color1,
    display: 'flex',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: theme.color3,
    fontSize: 30,
    padding: 10,
    margin: 20,
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
    backgroundColor: theme.color2,
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    text: {
      fontSize:15,
      color: theme.fontColor
    }
  },
});

export default styles;
