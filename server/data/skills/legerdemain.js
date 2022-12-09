export default legerdemain = {
  name: 'Legerdemain',
  description: "",
  skillChecks: [
      {
        name: 'Pick Locks',
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
      }, {
        name: 'Slight of Hand',
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
      }, {
        name: 'Thieves Cant',
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
    {name: "Gentle Touch", effect: {text: "Gain +1 to all pick locks skill checks."}},
    {name: "Fast Hands", effect: {text: "Gain +1 to all slight of hand skill checks."}},
    {name: "Subtle Speech", effect: {text: "Gain +1 to all thieves cant skill checks"}},
    {name: "Quick Draw", effect: {text: "Reduce the speed of your ready/stow actions by 2, once reduced to 0 additional instances of this trait allow you to perform one ready/stow action each turn for 0 action points."}},
    
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    // {name: "Defensive Camper", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [2]},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};