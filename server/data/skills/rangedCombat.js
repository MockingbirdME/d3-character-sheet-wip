export default physicalConditioning = {
  name: 'Ranged Combat',
  description: "Many characters have need to hit a target from a distance for combat, hunting, or sport.",
  skillChecks: [
      {
        name: 'Ranged Attack',
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
    {name: "Steady Aim", effect: {text: "Your maximum aim bonus is increased by +1."}},
    {name: "Quick Loader", effect: {text: "When readying or loading ammunition, ready or load 1 additional piece of ammunition"}},
    {name: "Overwatch", effect: {text: "When taking the overwatch action, increase the diameter of your targeted area by +1"}},
    {name: "Weapon Training", cost: [1], unlimited: true, effect: {text: "Select one range weapon, reduce the difficulty rating of that weapon when making ranged attacks with it by 1"}},
    // {name: "Inner Calm", effect: {text: "+1 defense when you take the Steady Oneself combat action"}},
    // {name: "Defensive Camper", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [2]},
    // {name: "Alert", effect: {text: "While conscious characters attempting to sneak past or surprise you gain a difficulty penalty die to their skill checks"}, costs: [3]},
    // {name: "Always on Guard", effect: {text: "Being asleep or engaged in distracting or strenuous activity no longer prevents you from making alertness checks; this does not allow you to make such checks if your unconscious due to damage, poison, magic, or other exceptional effects"}, requirements: "Defensive Camper", costs: [5]},
    // {name: "Master Observer", effect: {text: "When an unexpected combat begins you may take one action before initiative is rolled, when some action or event that leads to a limited action event triggers you may take one action before the count begins.  "}, costs: [8]}
  ],
};