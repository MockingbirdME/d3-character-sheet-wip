export default {
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
    {name: "Steady Aim", effect: {text: "Your maximum aim bonus is increased by +1."}, alwaysDisplay: true},
    {name: "Quick Loader", effect: {text: "When readying or loading ammunition, ready or load 1 additional piece of ammunition"}, alwaysDisplay: true},
    {name: "Overwatch", effect: {text: "When taking the overwatch action, increase the radius of your targeted area by +1"}, alwaysDisplay: true},
    {name: "Weapon Training", cost: [2], unlimited: true, effect: {text: "Select one range weapon, reduce the difficulty rating of that weapon when making ranged attacks with it by 1"}, alwaysDisplay: true},
    {name: "Close Quarters Training", cost: [3], effect: {text: "You may make ranged attacks when an opponent provokes a free attack against you"}, alwaysDisplay: true},
    {name: "Close Quarters Expert", cost: [5], effect: {text: "You do not suffer a penalty die when making ranged attacks while in melee range of an opponent"}, alwaysDisplay: true}
  ],
};