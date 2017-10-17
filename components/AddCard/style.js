import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputLabel: {
    fontFamily: 'Avenir',
    color: '#d35400'
  },
  headerLabel: {
    fontFamily: 'Avenir',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2980b9'
  },
  btn: {
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#2980b9',
    borderRadius: 10,
    padding: 15,
  },
  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  textBoxInput: {
    height: 40,
  },
  textBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 20
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
  },
  flexCenter: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default styles