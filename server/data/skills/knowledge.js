export default {
  name: 'Knowledge',
  description: "",
  skillChecks: [
    {
      name: 'Academics',
      primaryAttribute: ['Mind'],
      teamworkPossible: false,
      description:
        '',
      difficultyExamples:
        `
          4 - 
          7 - 
          10 - 
          13 - 
          16 - 
          19 - 
          22 - 
        `,
      criticalFailure: '',
      conditionalFailure: '',
      nearSuccess: '',
      criticalSuccess: '',
    },
    {
      name: 'Arcana',
      primaryAttribute: ['Mind'],
      teamworkPossible: false,
      description:
        '',
      difficultyExamples:
        `
          4 - 
          7 - 
          10 - 
          13 - 
          16 - 
          19 - 
          22 - 
        `,
      criticalFailure: '',
      conditionalFailure: '',
      nearSuccess: '',
      criticalSuccess: '',
    },
      {
        name: 'History',
        primaryAttribute: ['Mind'],
        teamworkPossible: false,
        description:
          '',
        difficultyExamples:
          `
            4 - 
            7 - 
            10 - 
            13 - 
            16 - 
            19 - 
            22 - 
          `,
        criticalFailure: '',
        conditionalFailure: '',
        nearSuccess: '',
        criticalSuccess: '',
      },
      {
        name: 'Mythology',
        primaryAttribute: ['Mind'],
        teamworkPossible: false,
        description:
          '',
        difficultyExamples:
          `
            4 - 
            7 - 
            10 - 
            13 - 
            16 - 
            19 - 
            22 - 
          `,
        criticalFailure: '',
        conditionalFailure: '',
        nearSuccess: '',
        criticalSuccess: '',
      }
  ],
  isSkillTree: true,
  traits: [
    {name: "Historian", effect: {text: "Gain +1 to all history and mythology skill checks.", skillBoosts: ["History", "Mythology"]}},
    {name: "Naturalist", effect: {text: "Gain +1 to all academics checks.", skillBoosts: ["Academics"]}},
    {name: "Occultist", effect: {text: "Gain +1 to all arcana skill checks.", skillBoosts: ["Arcana"]}},
    {name: "Linguist", effect: {text: "Learn one language, or two languages if they are both related to at least on other language you know."}},
    {name: "Reader", effect: {text: "Learn one alphabet, or two alphabets if they are both related to at least on other alphabet you know."}}
  ],
};