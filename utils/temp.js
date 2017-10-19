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
    name: 'General Knowledge',
    questionCount: 15,
    key: 'general_knowledge',
    description: 'Are you smarter than a 6th Grader.'
  }
];

export const baseQuestions = {
    programming: [
      {
        title: 'Is Udacity a Google Company?',
        answers: [
          { correct: false, hint: 'No an Amazon Co.' },
          { hint: 'Yes it is.', correct: true }]
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
          { hint: 'Unfortunately No', correct: true },
          { hint: 'Gladly', correct: false }]
        }
    ],
    sciences: [
      { title: 'Which is a branch of Algebra?',
        answers: [{ correct: false, hint: 'Hypothetical Algebra' }, { hint: 'Universal Algebra', correct: true }]
      },
      { title: 'Chemistry is the study of what?',
        answers: [{ correct: false, hint: 'Matter' }, { hint: 'Creating Explosions', correct: true }]
      },
      { title: 'What is Biology?.',
        answers: [{ hint: 'Study of Life and Living organisms', correct: true },
        { hint: 'Study of Humanity', correct: false }]
      },
      { title: 'Trigonometry is a branch of',
        answers: [{ hint: 'Mathematics', correct: true },
        { hint: 'Calculus', correct: false }]
      },
    ],
    general_knowledge: [
    {
      title: 'Which is the heavier metal of these two? Gold or Silver?',
      answers: [{correct: true, hint: 'Gold'}, { correct: false, hint: 'Silver' }]
    },
    {
      title: 'Which is the most common non-contagious disease in the world?',
      answers: [{correct: true, hint: 'Tooth Decay – A very common disease'},
                {correct: false, hint: 'Headaches ands Migraines'}]
    },
    {
      title: 'Which is the coldest location in the earth?',
      answers: [{correct: true, hint: 'East Antarctica'},
                {correct: false, hint: 'Greenland'}]
    },
    {
      title: 'Which is the hottest place in the earth?',
      answers: [{correct: false, hint: 'Arizona, USA'},
                {correct: true, hint: 'Ethiopia, Africa'},
                ]
    },
    {
      title: 'Which is the animal referred as the ship of the desert?',
      answers: [{correct: true, hint: 'Camel'},
                {correct: false, hint: 'Antelope'}]
    },
    {
      title: 'Which is the nearest star to planet earth?',
      answers: [{correct: true, hint: 'Sun'},
                {correct: false, hint: 'Mercury'}]
    },
    {
      title: 'Which is the least populated country in the world?',
      answers: [{correct: true, hint: 'Vatican City'},
                {correct: false, hint: 'Finland'}]
    },
    {
      title: 'Which is the oldest democracy / parliamentary in the world?',
      answers: [
                {correct: false, hint: 'India'}, {correct: true, hint: 'Britain'},]
    },
    {
      title: 'Which is the fastest animal on the land?',
      answers: [{correct: true, hint: 'Cheetah'},
                {correct: false, hint: 'Hummingbird'}]
    },
    {
      title: 'What differentiates a male lion from a female lion?',
      answers: [{correct: true, hint: 'Mane'},
                {correct: false, hint: 'Its roar'}]
    },
    {
      title: 'Which is the most sensitive organ in our body?',
      answers: [{correct: false, hint: 'the Nose'}, {correct: true, hint: 'Skin'},
                ]
    },
    {
      title: 'Which is the principal source of energy for earth?',
      answers: [ {correct: false, hint: 'Volcanoes'}, {correct: true, hint: 'Sun'},
               ]
    },
    {
      title: 'What are the two holes in the nose called?',
      answers: [{correct: true, hint: 'Nostrils'},
                {correct: false, hint: 'Nasal Pores'}]
    },
    {
      title: 'What is the standard taste of the water?',
      answers: [{correct: true, hint: 'Water has no taste'},
                {correct: false, hint: 'Salt'}]
    },
    {
      title: 'Which is the longest river on the earth?',
      answers: [{correct: false, hint: 'Mississipi'},
                {correct: true, hint: 'Nile'},
                ]
    }
]
}