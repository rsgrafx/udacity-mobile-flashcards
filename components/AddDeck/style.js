import { StyleSheet } from 'react-native';

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
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 20
  },
  standard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    margin: 10
  }
});

export default styles;