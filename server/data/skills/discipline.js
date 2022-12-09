export default discipline = {
  name: 'Discipline',
  description: "A measure of a character’s self control. This skill should be used when a character has to act against their desires or when otherwise compelled to do something they're trying not to.",
  skillChecks: [
      {
        name: 'Command',
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
        name: 'Concentrate',
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
        name: 'Resist Fear',
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
    {name: "Brave", effect: {text: "Gain +1 to all resist fear skill checks."}},
    {name: "Commanding", effect: {text: "Gain +1 to all command checks."}},
    {name: "Focused", effect: {text: "Gain +1 to all concentrate skill checks."}},
    {name: "Determined", effect: {text: "Gain +1 max willpower"}},
    {name: "Mind Over Matter", cost: [5, 13], effect: {text: "Gain +1 max wounds."}}
  ],
};