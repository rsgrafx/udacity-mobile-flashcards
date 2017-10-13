import {StyleSheet} from 'react-native'

const centered = {
  justifyContent: 'center',
  alignContent: 'center'
}

const styles = StyleSheet.create({
  centered,
  container: {
    flex: 1,
    ...centered
  },
  flex1centered: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  cardFace: {
    justifyContent: 'flex-start',
    backgroundColor: '#81D4FA'
  },
  button: {
    backgroundColor: 'green',
    padding: 20,
    margin: 5,
    ...centered
  },
  cardContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  face: {
    flex:1,
    backgroundColor: '#2ecc71',
    ...centered
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 3,
    borderWidth: 1,
    backgroundColor: '#007AFF',
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64
  }
});

export default styles


