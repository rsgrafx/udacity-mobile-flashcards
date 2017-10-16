import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center1: { justifyContent: 'center' },
  align: { alignContent: 'center', alignItems: 'center' },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scoreItem: {
    flexDirection: 'row',
    alignContent: 'stretch',
    height: 50
  },
  scoreText: {
    fontSize: 25,
    color: 'brown',
    fontWeight: 'bold'
  }
});

export default styles;