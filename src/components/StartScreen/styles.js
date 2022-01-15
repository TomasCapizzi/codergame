import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    marginVertical: 15,
    backgroundColor: 'pink',
    padding: 8,
    borderRadius: 5,
    marginVertical: 45,
    textBtn: {
      fontSize: 20,
      color: 'cornflowerblue',
      fontFamily: 'Pacifico-Regular'
    },
  },
  text: {
    margin: 20,
    color: 'cornflowerblue',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cabin-Medium',
  },
});

export default styles;
