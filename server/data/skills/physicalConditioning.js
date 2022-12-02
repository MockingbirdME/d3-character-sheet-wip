export default physicalConditioning = {
  name: 'Physical Conditioning',
  description: "A measure of a character’s conditioned strength, athletics, and resistance to exhaustion. The skill should be used when a character is avoiding or resisting an effect such as fatigue or poison, when recovering from injury or illness, or when performing most general feats of strength or athleticism.",
  skillChecks: [
      {
        name: 'Hold Breath',
        primaryAttribute: ['Body'],
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
        name: 'Lift/Drag',
        primaryAttribute: ['Body'],
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
        name: 'Endurance',
        primaryAttribute: ['Body'],
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
        name: 'Remain Conscious',
        primaryAttribute: ['Body'],
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
  ],
  isSkillTree: true,
  traits: [
    {name: "Muscular", effect: {text: "Gain +1 to all lift/drag/push skill checks."}},
    {name: "Stubborn Tenacity", effect: {text: "Gain +1 to all hold breath and remain conscious skill checks."}},
    {name: "Staying Power", effect: {text: "Gain +1 to all endurance skill checks"}},
    {name: "High Vitality", effect: {text: "Gain +1 stamina."}},
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    // {name: "Defensive Camper", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [2]},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};