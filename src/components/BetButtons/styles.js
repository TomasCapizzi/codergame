import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: theme.color2,
    borderRadius: 8,
    padding: 10,
    text: {
        fontSize: 15,
        color: theme.fontColor,
        fontWeight: 'bold'
    }
  }
})

export default styles;