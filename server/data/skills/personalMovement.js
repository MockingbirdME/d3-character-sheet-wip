export default {
  name: 'Personal Movement',
  description: "A character’s speed and competency during their natural movements. Used whenever a character’s speed and footing comes into question.",
  skillChecks: [
      {
        name: 'Balance',
        primaryAttribute: ['Reflexes'],
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
        name: 'Climb',
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
      {
        name: 'Jump',
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
      {
        name: 'Sprint',
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
        criticalFailure: 'The character moves up to one and a half times their speed but trips or triggers some negative effect',
        conditionalFailure: 'The character moves up to one and a half their speed.',
        nearSuccess: 'The character moves up to twice their speed',
        criticalSuccess: 'The character moves up to three times their speed',
      },
      {
        name: 'Swim',
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
      {
        name: 'Tumble',
        primaryAttribute: ['Reflexes'],
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
    {name: "Acrobat", effect: {text: "Gain +1 to all ballance and Tumbling skill checks.", skillBoosts: ["Ballance", "Tumbling"]}},
    {name: "Adventurous", effect: {text: "Gain +1 to all climb and swim skill checks.", skillBoosts: ["Climb", "Swim"]}},
    {name: "Be the Wind", effect: {text: "Gain +1 to all jump and sprint skill checks.", skillBoosts: ["Jump", "Sprint"]}},
    {name: "Long Strider", effect: {text: "Gain +1 speed", attributeBoost: ["speed"]}},
    {name: "Quick on Your Feet", cost: [5, 8], effect: {text: "Once on each of your turns, you may spend a point of stamina to reduce the speed of each move actions taken between now and the start of your next turn by one. If you've taken this trait twice, you may instead spend one point of max stamina to reduce the speed of each affected move action by 2."}, alwaysDisplay: true},
    {name: "Mobile Combatant", effect: {text: `Gain a cumulative +1 mobile defense bonus against free attacks you provoke while moving.`}, alwaysDisplay: true},
    {name: "Solid Balance", effect: {text: "+1 defense when you take the Steady Oneself combat action"}, alwaysDisplay: true},
  ],
};