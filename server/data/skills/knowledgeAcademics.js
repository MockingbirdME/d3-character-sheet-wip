export default knowledgeAcademics = {
  name: 'Knowledge Academics',
  description: "",
  skillChecks: [
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
        name: 'Science',
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
        name: 'Strategy',
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
    {name: "Historian", effect: {text: "Gain +1 to all history skill checks."}},
    {name: "Naturalist", effect: {text: "Gain +1 to all science checks."}},
    {name: "Tactician", effect: {text: "Gain +1 to all strategy skill checks."}},
    {name: "Linguist", effect: {text: "Learn one language, or two languages if they are both related to at least on other language you know."}},
    {name: "Reader", effect: {text: "Learn one alphabet, or two alphabets if they are both related to at least on other alphabet you know."}}
  ],
};