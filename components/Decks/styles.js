import {StyleSheet} from 'react-native'
import {belizeBlue} from '../../styles/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deckItem: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 233, 21, .2)',
    borderWidth: 1
  },
  deckItemText: {
    color: belizeBlue,
    fontSize: 24,
    fontWeight: 'bold'
  },
  quizHeader: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizHeaderText: {
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default styles