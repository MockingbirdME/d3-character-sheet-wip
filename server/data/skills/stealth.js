export default stealth = {
  name: 'Stealth',
  description: "How well a character conceals themselves or something/someone else as well as how well they may disguise themselves or move in such a way as to avoid notice.",
  skillChecks: [
    {
      name: 'Blend In',
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
    },
      {
        name: 'Cover Tracks',
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
        name: 'Disguise',
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
        name: 'Hide',
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
        name: 'Sneak',
        primaryAttribute: ['Perception', 'Reflexes'],
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
    {name: "Masquerade", effect: {text: "Gain +1 to all cover tracks and disguise skill checks."}},
    {name: "Obfuscate", effect: {text: "Gain +1 to all hide and sneak skill checks."}},
    {name: "Nonchalance", effect: {text: "Gain +1 to all blend in skill checks."}},
    // {name: "Weapon Training", cost: [1], unlimited: true, effect: {text: "Select one range weapon, reduce the difficulty rating of that weapon when making ranged attacks with it by 1"}},
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    // {name: "Environment Specialist", effect: {text: "Choose an environment, while in that environment gain an additional skilled bonus die to all survival checks"}, costs: [2], unlimited: true},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};