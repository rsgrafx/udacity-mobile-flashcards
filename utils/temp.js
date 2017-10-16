export const temporaryDecks = [
  {
    name: 'Languages',
    questionCount: 3,
    key: 'programming',
    description: 'Questions about languages, programming languages mostly'
  },
  {
    name: 'Sciences',
    questionCount: 4,
    key: 'sciences',
    description: 'Questions about languages, programming languages mostly'
  },
  {
    name: 'Self Help',
    questionCount: 0,
    key: 'self_help',
    description: 'Questions about Self Help'
  }
];

export const baseQuestions = {
    programming: [
      {
        title: 'Is Udacity a Google Company?',
        answers: [
          { correct: false, hint: 'No Amazon' },
          { hint: 'I think so', correct: true }]
        },
      {
        title: 'Do you have to be Over 18 to take a class?',
        answers: [
          { correct: false, hint: 'Yes' },
          { hint: 'No', correct: true }]
        },
      {
        title: 'Udacity will reimburce you if you complete the ReactJS course.',
        answers: [
          { hint: 'Hell No', correct: true },
          { hint: 'Gladly', correct: false }]
        }
    ],
    sciences: [
      { title: 'Is MedTech a Medicene Company?',
        answers: [{ correct: false, hint: 'No Amazon' }, { hint: 'I think so', correct: true }]
      },
      { title: 'Is Birth Control a  class?',
        answers: [{ correct: false, hint: 'Yes' }, { hint: 'No', correct: true }]
      },
      { title: 'How is Biology?.',
        answers: [{ hint: 'Hell No', correct: true },
        { hint: 'Gladly', correct: false }]
      },
      { title: 'Describe the Peanut.',
        answers: [{ hint: 'Hell No', correct: true },
        { hint: 'Gladly', correct: false }]
      }
    ]
};