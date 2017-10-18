import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2980b9'
  },
  scoreHeader: {
    flexDirection: 'row',
    paddingLeft: 30,
    marginBottom: 15
  },
  scoreHeaderTxt: {
    color: '#34495e'
  },
  scoreList: {
    flex: 8,
    alignItems: 'stretch'
  },
  center1: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  align: {
    alignContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  },
  scoreQuizName: {
    flex: 3,
    justifyContent: 'center'
  },
  scoreItem: {
    flexDirection: 'row',
    alignContent: 'stretch',
    height: 50,
    backgroundColor: '#ecf0f1',
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#bdc3c7',
    borderBottomWidth: 1
  },
  scoreText: {
    fontSize: 20,
    color: '#d35400',
    fontWeight: 'bold',
    paddingLeft: 10
  }
});

export default styles;