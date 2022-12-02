export default survival = {
  name: 'Survival',
  description: "How well a character can keep themselves alive and healthy outside of civilization or when in the less comfortable parts of it.",
  skillChecks: [
      {
        name: 'Find/Build Shelter',
        primaryAttribute: ['Mind', 'Perception'],
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
      }, {
        name: 'Forage',
        primaryAttribute: ['Mind', 'Perception'],
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
      }, {
        name: 'Hunt',
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
      }, {
        name: 'Make Traps',
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
      }, {
        name: 'Track',
        primaryAttribute: ['Perception'],
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
    {name: "Surveyor", effect: {text: "Gain +1 to all find/build shelter and make trap skill checks."}},
    {name: "Scavenger", effect: {text: "Gain +1 to all forage and hunt skill checks."}},
    {name: "Tracker", effect: {text: "Gain +1 to all track skill checks."}},
    // {name: "Weapon Training", cost: [1], unlimited: true, effect: {text: "Select one range weapon, reduce the difficulty rating of that weapon when making ranged attacks with it by 1"}},
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    {name: "Environment Specialist", effect: {text: "Choose an environment, while in that environment gain an additional skilled bonus die to all survival checks"}, costs: [2], unlimited: true},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};