import { StyleSheet } from 'react-native';
import { belizeBlue } from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qCount: {
    backgroundColor: belizeBlue,
    borderRadius: 20,
    padding: 0
  },
  qCountText: {
    fontWeight: 'bold',
    color: 'white'
  },
  deckItem: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    borderWidth: 1,
    borderColor: '#fff'
  },
  deckItemText: {
    color: belizeBlue,
    fontSize: 24,
    fontWeight: 'bold'
  },
  quizHeader: {
    height: 75,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizHeaderText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: belizeBlue
  }
});

export default styles