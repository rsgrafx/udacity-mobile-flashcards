import { StyleSheet, Platform } from 'react-native';

const borderline = Platform.OS === 'ios'
  ? { borderBottomWidth: 1,
     borderBottomColor: 'grey'
    }
  : {}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#d35400'
  },
  headerLabel: {
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
  },
  textBoxInput: {
    height: 40,
  },
  textBox: {
    marginBottom: 20,
    ...borderline
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