import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0000ff',
    display: 'flex',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  text: {
    color: '#fff',
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
    backgroundColor: '#ccc',
    padding: 10,
    display: 'flex',
    alignItems: 'center'
  },
});

export default styles;
