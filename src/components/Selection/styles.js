import {StyleSheet} from 'react-native';
import theme from '../../utils/constants/theme';

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    width: '100%',
    padding: 20,
    alignItems: 'center',
    text:{
      fontSize: 20,
      color: theme.color2
    }
  },
})

export default styles;