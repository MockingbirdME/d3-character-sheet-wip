export const primary = {
  body: {},
  mind: {},
  perception: {},
  reflexes: {}
}

export const secondary = {
  'Defense Bonus, Mental': {
    description: "",
    baseValue: "mind"
  },
  'Defense Bonus, Melee': {
    description: "",
    baseValue: "reflexes - size"
  },
  'Defense Bonus, Ranged': {
    description: "",
    baseValue: "reflexes + awareness - size"
  },
  // 'Initiative': {
  //   description: "",
  //   baseValue: "reflexes"
  // },
  'Size': {
    description: "",
    baseValue: "0 + size (if positive)"
  },
  'Speed': {
    description: "",
    baseValue: "set by strain/species, usually 4"
  }
}


export const resource = {
  defense: {
    displayName: "Defense",
    description:
      "The amount of defense a character has.",
    uses:
      "Attacks made against a character are compared to the character's current defense.",
    baseValue: "8 + perception + mind + reflexes."
  },
  luck: {
    displayName: "Luck",
    description:
      "The total amount of luck a character has.",
    uses: "Luck can be spent in place of any other resource. Additionally, you can spend one luck to reroll one die in a skill check you just made, or one max luck to reroll any number of dice in the skill check, no more than one luck can be spent for a given skill check.",
    baseValue:
      "1 + backgrounds"
  },
  stamina: {
    displayName: "Stamina",
    description:
      "The total amount of stamina a character has.",
    uses: "Stamina is used for fuel various actions a character may take as they push themselves to their limits with acts of arcane or physical prowess. Max stamina is also reduced when the character suffers physical damage or is otherwise drained of energy.",
    baseValue:
      "2 + twice body (if positive) or minus body if negative (minimum 1)."
  },
  vigilance: {
    displayName: "Vigilance",
    description:
      "The total level of vigilance a character has.",
    uses: "Stealth and deception is measured against vigilance, a character being distracted can reduce it.",
    baseValue:
      "2 + perception."
  },
  willpower: {
    displayName: "Willpower",
    description:
      "The total amount of willpower a character has.",
    uses: "Effects that affect a characters mind can only be applied if the target's willpower is low enough, other effects ware at the targets mind reducing their willpower. Willpower can also be spent by a character when they take the focus action.",
    baseValue:
      "2 + mind."
  },
  wounds: {
    displayName: "Wounds",
    description:
      "The total number of wounds a character can suffer before dying.",
    uses: "Wounds are reduced when damage is inflicted and recover more slowly than other resources",
    baseValue:
      "3 + size"
  }
};
