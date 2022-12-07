export default performance = {
  name: 'Performance',
  description: "Playing musical instruments, acting, or giving a speech are all variations of performance.",
  skillChecks: [
      {
        name: 'Diplomacy',
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
      },
      {
        name: 'Music',
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
        name: 'Oration',
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
    {name: "Minstrel", effect: {text: "Gain +1 to all music skill checks."}},
    {name: "Politician", effect: {text: "Gain +1 to all diplomacy checks."}},
    {name: "Bard", effect: {text: "Gain +1 to all oration skill checks."}},
    {name: "Master of Subterfuge", cost: [5, 13], effect: {text: "Gain a bonus die on all checks where you are attempting to deceive your audience."}},
    {name: "Intimidating Presence", cost: [5, 13], effect: {text: "Gain a bonus die on all checks where you are attempting to instill fear in your audience."}},
    {name: "Soothing Words", cost: [5, 13], effect: {text: "Gain a bonus die on all checks where you are attempting to comfort the audience."}}
  ],
};