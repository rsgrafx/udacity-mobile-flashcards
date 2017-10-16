import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#34495e',
    borderRadius: 3,
    padding: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 15
  },
  textInput: {
    height: 40,
    borderBottomColor: 'grey',
    borderWidth: 1
  },
  answers: {
    flex: 2,
    marginTop: 10,
    padding: 10
  },
  correctCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles