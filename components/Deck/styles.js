import { StyleSheet } from 'react-native';

const centered = {
  justifyContent: 'center',
  alignContent: 'center'
};

const baseBtn = {
  height: 60,
  backgroundColor: '#16a085',
  borderRadius: 10,
  ...centered
 };

const styles = StyleSheet.create({
  answerBtn: baseBtn,
  backtoDeckBtn: {
    ...baseBtn,
    marginTop: 20,
    backgroundColor: '#e67e22'
  },
  answerQuestionTxt: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  answerImg: {
    width: 100,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 50
  },
  centered,
  container: {
    flex: 1,
    ...centered
  },
  cardSetting: {
    flex: 1,
    justifyContent: 'space-between'
  },
  flipCardStyle: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: '#B3E5FC',
    borderRadius: 10
  },
  flipCard: {
    flex: 1,
    borderRadius: 10,
    borderColor: '#2980b9',
    padding: 10
  },
  flex1centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  finalCard: {
    alignContent: 'flex-end'
  },
  finalCardTxt: {
    fontSize: 25, fontWeight: 'bold'
  },
  cardDetail: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  cardFace: {
    justifyContent: 'flex-start',
    backgroundColor: '#81D4FA'
  },
  createCardBtn: {
    padding: 20,
    backgroundColor: '#16a085',
    margin: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  createCardBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
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
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    ...centered
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  img: {
    flex: 1,
    height: 64
  },
  questionsLeft: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  quizTitleBox: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quizHdrTxt: { fontSize: 25,  },
  quizTitleTxt: {
    fontSize: 45,
    paddingTop: 20,
    color: '#e74c3c',
    fontWeight: 'bold',

  },
  quizTitleImg: {
    width: 100,
    height: 100,
    marginTop: 10
  },
});

export default styles;
